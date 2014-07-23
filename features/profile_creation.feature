Feature: profile creation
	In order to have a full profile
	As a first-time user
	I want to fill in my details

	@javascript
	Scenario: I am a first time user
		Given I have just signed up
		And I have filled in my name, type of creative, network, and attached a profile picture
		Then I should see them on my newly created profile
