class UsersController < ApplicationController

	respond_to :json

	def show
		@user = User.find params[:id]
		# @user = current_user
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

		@user.update(params[:user].permit(:avatar))

		render :show

	end


end
