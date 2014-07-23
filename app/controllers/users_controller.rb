class UsersController < ApplicationController

	respond_to :json

	def show
		@user = User.find params[:id]
	end

	def update
		@user = User.find params[:id]
		@user.update(name: params[:name])
		render :show
	end

end
