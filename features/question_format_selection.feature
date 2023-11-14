Feature: choosing the question format 
    As a user, I want to choose a method for learning.
    So that I can engage with learning in my preferred manner.

Scenario: Choose Multiple Choice method 
   Given I am on the login page
   When I press the "Sign Up" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Sign Up" button
   Then I should be on the welcome page
   When I press the "Python" button
   Then I should be on the home page

    When I press the "Declaration and Instantiation" button
    When I press the "Multiple Choice" button
    Then I should be on the problems page
    And I should see "A"
    And I should see "B"
    And I should see "C"

Scenario: Choose Flash Cards method
   Given I am on the login page
   When I press the "Login" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Login" button
   Then I should be on the home page
   And I should see "Python"

    When I press the "Declaration and Instantiation" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    And I should see "Question"
    And I should see "Flip Over"
    And I should see "Next"

