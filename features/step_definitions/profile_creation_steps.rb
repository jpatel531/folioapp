Given(/^I have just signed up$/) do
	visit '/'
  click_link 'Sign up'
  fill_in 'Email', with: 'bla@bla.com'
  fill_in 'Password', with: '12345678'
  fill_in 'Password confirmation', with: '12345678'
  click_button 'Sign up'
end

Given(/^I have filled in my name, type of creative, network, and attached a profile picture$/) do
  click_link 'Name'
  find(:css, "input").set "Laurie Lewis"
  click_button 'save'
  # click_link 'Profession'
  # find(:css, "input").set "artist, writer, illustrator"
  # click_link 'Network'
  # find(:css, "input").set "Cambridge"
  # attach_file 'Profile Picture', with: Rails.root.join('features/images/jpeg.jpg')
end

Then(/^I should see them on my newly created profile$/) do
  visit current_path
  page.find('h1.name').should have_text('Laurie Lewis')

  # expect(page).to have_content 'Artist, Writer & Illustrator'
  # expect(page).to have_content 'Cambridge'
  # expect(page).to have_css 'img#profile-pic'
end
