Feature: uploading images
	In order to have a nice portfolio
	As an artist
	I want to upload images to a collection on my profile
	And specify title, image-grouping, genre, tags, and captions

	Background:
		Given I am a user
		And on my profile
		And I click the 'Work' button on my profile cover
		And I specify that I wish to upload art


	Scenario: uploading the first of a category in the right format without specifying group
		When I attach an image
		And I give it a title, medium, genre and captions
		And I click submit
		Then I should see the image in the default group

	Scenario: correct upload while specifying a new group

	Scenario: correct upload while specifying an existing group

	Scenario: not uploading anything

	Scenario: uploading a file in the wrong format

	Scenario: not specifying a title

	Scenario: not specifying a medium
