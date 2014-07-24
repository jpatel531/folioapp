Given(/^I am a user$/) do
  @user = User.create(email: "bla@bla.com", password: "12345678", password_confirmation: "12345678")
  login_as @user
end

Given(/^on my profile$/) do
  visit "/users/#{@user.id}"
end

Given(/^I click the 'Work' button on my profile cover$/) do
  click_button 'Work'
end

Given(/^I specify that I wish to upload art$/) do
  click_link 'Upload Art'
end

When(/^I attach an image$/) do
  attach_file 'Upload', Rails.root.join('features/images/art.jpg')
end

When(/^I give it a title, medium, genre and captions$/) do
  fill_in 'Title', with: 'Samurai'
  fill_in 'Medium', with: 'Digital Art'
  fill_in 'Genre', with: 'Fantasy, Japanese tings'
  fill_in 'Caption', with: 'Hello, here is some Art'
end


When(/^I click submit$/) do
  click_button 'Save'
end

Then(/^I should see the image in the default group$/) do
  within 'div.my-collection.preview' do
    expect(page).to have_css 'img.uploaded-image'
  end
end