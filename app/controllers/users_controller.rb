class UsersController < ApplicationController

	respond_to :json

	def show
		@user = User.find params[:id]
		@work = Work.new
	end

	def update
		@user = User.find params[:id]
		@work = Work.new
		[:name, :short_bio, :profession, :network].each do |attr|
			if params[attr]
				@user.update!(attr => params[attr])
				puts params[attr]
			end
		end

		if params[:file]
			@user.update!(avatar: params[:file])
		else
			@user.update(avatar_params)
		end

		redirect_to user_path(id: current_user.id, editable: true)
	end

	private

	def avatar_params
		params.require(:user).permit(:avatar)
	end

end
