Feature: choosing the question format 
    As a user, I want to choose a method for learning.
    So that I can engage with learning in my preferred manner.

Scenario: Choose Multiple Choice method 
    Given I am on the home page
    When I press the "Declaration and Instantiation" button
    When I press the "Multiple Choice" button
    Then I should be on the problems page
    And I should see "A"
    And I should see "B"
    And I should see "C"

Scenario: Choose Flash Cards method
    Given I am on the home page
    When I press the "Declaration and Instantiation" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    And I should see "A"
    And I should see "B"
    And I should see "C"

