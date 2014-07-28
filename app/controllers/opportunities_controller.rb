class OpportunitiesController < ApplicationController

	def new
		@organisation = Organisation.find params[:organisation_id]
		@opportunity = @organisation.opportunities.new
	end


end
