class SubmissionsController < ApplicationController

	def new
		@opportunity = Opportunity.find params[:opportunity_id]
		@submission = @opportunity.submissions.new
		
		@available_works = current_user.works.all.map {|work| ["#{work.collection.title}: #{work.title}", work.id] }
	end

	def create
		@opportunity = Opportunity.find params[:opportunity_id]
		work = Work.find params[:submission].permit(:work)["work"]
		submission = @opportunity.submissions.create message: params[:submission].permit(:message)["message"], work: work
		@organisation = Organisation.find params[:organisation_id]
		submission.recipient = @organisation
		submission.sender = current_user
		submission.save!
		redirect_to "/organisations/#{@organisation.id}"
	end




end
