class Organisation < ActiveRecord::Base
	has_many :memberships
	has_many :users, through: :memberships
	# belongs_to :users

	# has_and_belongs_to_many :users


	has_attached_file :image, 
  									 styles: { thumb: "500x500>" }, 
  									 storage: :s3, 
  									 s3_credentials: {
  									 	bucket: 'ffolioapp',
  									 	access_key_id: Rails.application.secrets.s3_access_key,
  									 	secret_access_key: Rails.application.secrets.s3_secret_key
  									 }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
	after_create :set_role_name

	def creator_role=(role_name)
		@role_name = role_name
	end

	def creator_role
	end

	private
	
	def set_role_name
		memberships.first.update(role: @role_name)
	end

end



