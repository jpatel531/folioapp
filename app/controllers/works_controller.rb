class WorksController < ApplicationController

	def create
		@user = User.find params[:user_id]
		# @user = current_user
		@work = @user.works.create work_params
		render json: [@user,@work]
	end

	private

	def work_params
		params.require(:work).permit(:image, :title, :medium_names, :genre_names, :caption)
	end

end

