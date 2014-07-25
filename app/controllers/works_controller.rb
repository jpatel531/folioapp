class WorksController < ApplicationController

	def new
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

