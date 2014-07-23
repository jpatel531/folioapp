Feature: uploading images
	In order to have a nice portfolio
	As an artist
	I want to upload images to profile
	And specify image-type, genre, tags, whether part of collection, and captions

	Background:
		Given I am on my profile
		And I click the 'Work' button on my profile cover
		And I specify that I wish to upload art
		And I attach an image

		Scenario: I can add details
		When I specify image-type
		And I specify genre
		And I specify tags
		And I specify if it's part of a collection
		And I add captions