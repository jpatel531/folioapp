Given(/^that I arrive on the ffolio site$/) do
  visit '/'
end

Given(/^I register for a ffolio account$/) do
	click_link 'Sign up'
  fill_in 'Email', with: 'bla@bla.com'
  fill_in 'Password', with: '12345678'
  fill_in 'Password confirmation', with: '12345678'
  click_button 'Sign up'
end

Then(/^I should see "(.*?)"$/) do |arg1|
  expect(page).to have_content 'Welcome to ffol.io'
end

Then(/^I should be invited to fill in my profile details$/) do
  expect(page).to have_content 'Please fill in your profile details'
end