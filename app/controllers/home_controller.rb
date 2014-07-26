class HomeController < ApplicationController

	before_action :authenticate_user!

	def index
		flash[:notice] = "Welcome to ffol.io"
		redirect_to user_path(id: current_user.id, editable: true) if current_user.sign_in_count == 1
	end

end
