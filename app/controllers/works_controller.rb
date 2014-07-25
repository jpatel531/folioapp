class WorksController < ApplicationController

	def create
		@user = User.find params[:user_id]
		@work = @user.works.create work_params
	end

	private

	def work_params
		params.require(:work).permit(:image, :title, :medium_names, :genre_names, :caption)
	end

end

