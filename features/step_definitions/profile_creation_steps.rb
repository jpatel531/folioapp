Given(/^I have just signed up$/) do
	visit '/'
  click_link 'Sign up'
  fill_in 'Email', with: 'bla@bla.com'
  fill_in 'Password', with: '12345678'
  fill_in 'Password confirmation', with: '12345678'
  click_button 'Sign up'
end

Given(/^I have filled in my name, type of creative, network, and attached a profile picture$/) do
  within '.profile-info' do
    # click_link 'Name'
    find('a.name').trigger(:click)
    find(:css, "input").set "Laurie Lewis"
    click_button 'save'

    # click_link 'Profession'
    find('a.profession').trigger(:click)
    find(:css, "input").set "artist, writer, illustrator"
    click_button 'save'

    # click_link 'Network'
    find('a.network').trigger(:click)
    find(:css, "input").set "Cambridge"
    click_button 'save'

    # click_link 'Short Bio'
    find('a.short-bio').trigger(:click)
    find(:css, "input").set "Lorem Ipsum"
    click_button 'save'
  
  end

  attach_file 'Avatar', Rails.root.join('features/images/profile.jpg')
  click_button 'Update User'
end

Then(/^I should see them on my newly created profile$/) do
  visit current_path
  page.find('h1.name').should have_text('Laurie Lewis')
  page.find('p.profession').should have_text "artist, writer, illustrator"
  page.find('p.network').should have_text "Cambridge"
  page.find('p.short-bio').should have_text "Lorem Ipsum"

  expect(page).to have_css 'img.profile-pic'
end


When(/^I click the 'Toggle Edit' button$/) do
  click_button 'Toggle Edit'
end

Then(/^I should not be able to edit my profile information$/) do
  expect(page).not_to have_link 'Laurie Lewis'
end
