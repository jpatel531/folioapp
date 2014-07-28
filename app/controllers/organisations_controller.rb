class OrganisationsController < ApplicationController

	before_action :authenticate_user!

	def new
		@user = current_user
		@organisation = @user.organisations.new
	end

	def create
	
		organisation  = Organisation.new organisation_params
		organisation.users << current_user
		organisation.save

		redirect_to organisation_path(organisation)
	end

	def show
		@organisation = Organisation.find params[:id]
	end


	private

	def organisation_params
		params.require(:organisation).permit(:name, :description, :network, :organisation_type, :image, :creator_role)
	end

end
