Feature: choosing the question category 
    As a user, I want to choose a category of syntax to learn. 
    So that I can choose my preferred area of X programming language to study. 

Scenario: Select Declaration and Instantiation problem category
    Given I am on the home page
    When I press the "Declaration and Instantiation" button
    Then I should see "Pick a Review Method" 
    And I should see "Multiple Choice"
    And I should see "Flash Cards"
    And I should see "Back"

Scenario: Select Control Flow problem category
    Given I am on the home page
    When I press the "Control Flow" button
    Then I should see "Pick a Review Method" 
    And I should see "Multiple Choice"
    And I should see "Flash Cards"
    And I should see "Back"

Scenario: Select Data Structures problem category
    Given I am on the home page
    When I press the "Data Structures" button
    Then I should see "Pick a Review Method" 
    And I should see "Multiple Choice"
    And I should see "Flash Cards"
    And I should see "Back"
