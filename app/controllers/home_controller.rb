class HomeController < ApplicationController

	before_action :authenticate_user!

	def index
		flash[:notice] = "Welcome to ffol.io"
		redirect_to ((current_user.sign_in_count == 1) ? current_user : root_path)
	end

end
