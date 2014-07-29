class HomeController < ApplicationController

	before_action :authenticate_user!

	def index
		flash[:notice] = "Welcome to ffol.io"
		if current_user.sign_in_count == 1
			current_user.sign_in_count += 1
			current_user.save
			redirect_to user_path(id: current_user.id, editable: true) 
		else
			render :index
		end
	end

end
