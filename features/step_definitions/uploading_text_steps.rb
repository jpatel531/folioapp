Given(/^I specify that I wish to upload text$/) do
  expect(current_path).to eq "/users/#{@user.id}/collections"
  within 'div.My.Collection' do 
    click_button 'Add To My Collection'
    click_link 'Add Writing'
  end
end

When(/^I enter text$/) do
  fill_in 
end

When(/^I upload a thumbnail, add a title, genres and a short description$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see the work's thumbnail, title, short description and genres in the default group$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^if I click on the work's title$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I should see the content of the work$/) do
  pending # express the regexp above with the code you wish you had
end