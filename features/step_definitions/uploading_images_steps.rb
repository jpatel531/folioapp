Given(/^I am a user$/) do
  @user = User.create(email: "hello@hi.com", password: "12345678", password_confirmation: "12345678")
  login_as @user
end


Given(/^on my profile$/) do
  visit "/users/#{@user.id}"
end

Given(/^I click the 'Work' link on my profile cover$/) do
  click_link 'Work'
end

Given(/^I specify that I wish to upload art$/) do
  # expect(current_path).to eq "/users/#{@user.id}/collections"
  click_button 'Add To My Collection'
  click_link 'Add Art'
end

When(/^I attach an image$/) do
  attach_file 'Image', Rails.root.join('features/images/art.jpg')
end

When(/^I give it a title, medium, genre and captions$/) do
  click_link 'Add Details'
  fill_in 'Title', with: 'Samurai'
  fill_in 'Media', with: 'Digital Art'
  fill_in 'Genres', with: 'Fantasy, Japanese tings'
  fill_in 'Caption', with: 'Hello, here is some Art'
end


When(/^I click submit$/) do
  click_button 'Publish'
end

Then(/^I should see the image in the default group$/) do
  @collection = @user.collections.last
  expect(current_path).to eq "/users/#{@user.id}/collections/#{@collection.id}"
end

Then(/^I should see the image in on its collection page$/) do
  expect(page).to have_css 'img.uploaded-image'
  expect(page).to have_content 'Samurai'
  expect(page).to have_content 'Digital Art'
  expect(page).to have_content 'Fantasy Japanese tings'
  expect(page).to have_content 'Hello, here is some Art'
end


When(/^I fail to attach an image$/) do
  click_link 'Add Details'
  fill_in 'Title', with: 'Samurai'
  fill_in 'Media', with: 'Digital Art'
  fill_in 'Genres', with: 'Fantasy, Japanese tings'
  fill_in 'Caption', with: 'Hello, here is some Art'
  click_button 'Publish'
end

Then(/^I should not be allowed to submit$/) do
  @collection = @user.collections.last
  expect(current_path).to eq new_user_collection_work_path(user_id: @user.id, collection_id: @collection.id)
  expect(current_path).not_to eq "/users/#{@user.id}/collections/#{@collection.id}"
end

When(/^I fail to specify a title$/) do
  attach_file 'Image', Rails.root.join('features/images/art.jpg')
  click_link 'Add Details'
  fill_in 'Media', with: 'Digital Art'
  fill_in 'Genres', with: 'Fantasy, Japanese tings'
  fill_in 'Caption', with: 'Hello, here is some Art'
end
































