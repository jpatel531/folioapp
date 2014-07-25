class WorksController < ApplicationController

	def new
		@upload_type = params[:upload_type]
		@user = User.find params[:user_id]
		@collection = @user.collections.find params[:collection_id]
		@new_work = @collection.works.new
	end

	def create
		@user = User.find params[:user_id]
		# @user = current_user
		@work = @user.works.create work_params
	end

	private

	def work_params
		params.require(:work).permit(:image, :title, :medium_names, :genre_names, :caption)
	end

end

