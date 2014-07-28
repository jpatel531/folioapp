class Organisation < ActiveRecord::Base
	has_many :memberships
	has_many :users, through: :memberships
	# has_and_belongs_to_many :users



	def creator_role=(role_name)
		users.first.membership.role = role_name
	end

	def creator_role
	end


end



id | organisation_id | user_id | role 

organisation_users

memberships

