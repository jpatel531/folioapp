Feature: uploading text
	In order to have a nice portfolio
	As an artist
	I want to upload text to a collection on my profile
	And specify title, thumbnail, genre, tags, and captions

	Background:
		Given I am signed in as a user
		And on my profile page
		And I click the 'Work' button
		And I click radio button upload text


	Scenario: uploading the first of a category in the right format without specifying group
		When I attach a thumbnail
		And I give it a title, genre and captions
		And I clicked on submit
		Then I should see text in the default group
		And I should see text in on its collection page

	Scenario: correct upload while specifying a new group

	Scenario: correct upload while specifying an existing group

	Scenario: not uploading anything

	Scenario: not specifying a title

	Scenario: not specifying a genre

	Scenario: I am able to share a URL of the text