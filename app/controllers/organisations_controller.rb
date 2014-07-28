class OrganisationsController < ApplicationController

	def new
		@user = current_user
		@organisation = @user.organisations.new
	end


end
