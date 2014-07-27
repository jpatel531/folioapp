class CollectionsController < ApplicationController

	def index
		@user = User.find params[:user_id]
	end

	def show
		@user = User.find params[:user_id]
		@collection = @user.collections.find params[:id]
	end

	def new
		@user = User.find params[:user_id]
		@collection = @user.collections.new
	end

	def create
		@user = User.find params[:user_id]
		@collection = @user.collections.create collection_params
		render "index"
	end

	private

	def collection_params
		params.require(:collection).permit(:title, :description, :image)
	end

end
