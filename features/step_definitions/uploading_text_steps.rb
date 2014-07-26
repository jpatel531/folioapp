Given(/^I specify that I wish to upload text$/) do
  expect(current_path).to eq "/users/#{@user.id}/collections"
  within 'div.My.Collection' do 
    click_button 'Add To My Collection'
    click_link 'Add Writing'
  end
end

When(/^I enter text$/) do
  fill_in "text_field", with: "The apparition of the faces in the crowd \n Petals on a wet black bough"
end

When(/^I upload a thumbnail, add a title, genres and a short description$/) do
  click_link 'Add Details'
  attach_file 'Thumbnail', Rails.root.join('features/images/art.jpg')
  fill_in 'Title', with: 'In A Station of the Metro'
  fill_in 'Genres', with: 'Modernism, Imagism, Vorticism'
  fill_in 'Short Description', with: 'an intellectual and emotional complex in an instant of time.'
end

Then(/^I should see the work's thumbnail, title, short description and genres in the default group$/) do
  expect(page).to have_css 'img.text-thumbnail'
  expect(page).to have_content 'In A Station of the Metro'
  expect(page).to have_content 'Modernism Imagism Vorticism'
  expect(page).to have_content 'an intellectual and emotional complex in an instant of time.'
end

Then(/^if I click on the work's title$/) do
  click_link 'In A Station of the Metro'
end

Then(/^I should see the content of the work$/) do
  expect(page).to have_content "The apparition of the faces in the crowd \n Petals on a wet black bough"
end