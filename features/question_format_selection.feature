Feature: choosing the question format 
    As a user, I want to choose a method for learning.
    So that I can engage with learning in my preferred manner.

Scenario: Choose Multiple Choice method 
    Given I am on the home page
    When I press "Declaration"
    When I click on "Multiple Choice"
    Then I should be taken to the "Problem Modal" to select a coding language.

Scenario: Choose Multiple Choice method 
    Given I am on the home page
    When I press "Declaration"
    When I click on "Multiple Choice"
    When I click on "Multiple Choice"
    Then I should be taken to the "Problem Modal" to select a coding language.

Scenario: Choose Flash Cards method
    Given I am on the "Home Page Modal"
    When I click on "Flash Cards"
    Then I should be taken to the "Problem Modal" to select a coding language.
