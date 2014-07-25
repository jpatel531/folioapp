class CollectionsController < ApplicationController

	def index
		@user = User.find params[:user_id]
	end

	def show
		@user = User.find params[:user_id]
		@collection = @user.collections.find params[:id]
	end
end
