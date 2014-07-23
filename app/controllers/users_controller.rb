class UsersController < ApplicationController

	respond_to :json

	def show
		@user = User.find params[:id]
	end

	def update
		@user = User.find params[:id]

		[:name, :short_bio, :profession, :network].each do |attr|
			if params[attr]
				@user.update!(attr => params[attr])
				puts params[attr]
			end
		end

		# puts params
		# @user.update(params[:profile].permit(:name, :bio, :profession, :network))
		render json: { success: true }
		# render :show
	end


	# private

	# def update(user)
	# 	user.update(name: params[:name]) if params[:name]

	# end

end
