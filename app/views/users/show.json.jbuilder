json.name @user.name
json.id @user.id
json.profession @user.formatted_profession
json.network @user.network
json.shortBio @user.short_bio
json.signInCount @user.sign_in_count




json.collections(@user.collections) do |collection|
	json.title collection.title
	json.id collection.id
	json.description collection.description
	json.works(collection.works) do |work|
		json.title work.title
		json.format work.format
	end
end
