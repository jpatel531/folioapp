Given(/^I am signed in as a user$/) do
  @user = User.create(email: "vaidas@yahoo.com", password: "12345678", password_confirmation: "12345678")
  login_as @user
end

Given(/^on my profile page$/) do
  visit "/users/#{@user.id}"
end

Given(/^I click the 'Work' button$/) do
  click_button 'Work'
end


Given(/^I click radio button upload text$/) do
  click_button 'Upload Text'
end

When(/^I attach a thumbnail$/) do
  attach_file 'Image', Rails.root.join('features/images/art.jpg')
end

When(/^I give it a title, genre and captions$/) do
  fill_in 'Title', with: 'Putative real world'
  fill_in 'Genres', with: 'Bangsian, Contemporary Fantasy'
  fill_in 'Caption', with: 'Let the mind go wild'
end

When(/^I clicked on submit$/) do
  click_button 'Create Work'
end

Then(/^I should see text in the default group$/) do
  within 'div.my-collection.preview' do
    expect(page).to have_css 'div.uploaded-text'
  end
end

Then(/^I should see text in on its collection page$/) do
  click_button 'View Collection'
  expect(page).to have_css 'div.uploaded-text'
  click_button 'View Details'
  expect(page).to have_content 'Putative real world'
  expect(page).to have_content 'Bangsian, Contemporary Fantasy'
  expect(page).to have_content 'Let the mind go wild'
end


