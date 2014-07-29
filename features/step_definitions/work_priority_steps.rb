Given(/^I have a piece of work$/) do
	@user = create(:user)
	login_as @user
	@work = create(:work)
	@collection = @user.collections.first
	@collection.works << @work
end

Given(/^I am on the collection page for an image$/) do
	visit "/users/#{@user.id}/collections/#{@collection.id}"
end

Given(/^I specify that I wish to show it on my cover$/) do
	puts page.html
	within 'div.Hello.World' do 
		check 'Show on Cover'
	end
end

Then(/^I should see that work and its details on my profile cover\.$/) do
	visit "users/#{@user.id}"
	expect(page).to have_content 'Hello World'
	expect(page).to have_content 'Paintings'
	expect(page).to have_css 'img.selection'
end
