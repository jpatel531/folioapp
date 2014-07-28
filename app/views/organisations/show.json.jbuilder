json.name @organisation.name
json.organisationType @organisation.organisation_type
json.network @organisation.network
json.description @organisation.description
json.image @organisation.image.url

json.opportunities(@organisation.opportunities) do |opportunity|
	json.title opportunity.title
	json.description opportunity.description
	json.requirements opportunity.requirements
	json.image opportunity.image.url
end