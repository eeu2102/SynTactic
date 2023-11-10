Feature: User Registration
    As a user
    I want to register and log into the SynTactic platform
    So that I can access personalized syntax learning features

Scenario: User Registration and Login
    Given I am on the landing page
    When I press on the "Sign Up" button
    And I fill in "Username" with "User1"
    And I fill in "Password" with "Password1"
    When I press the "Sign Up" button
    Then I should be on the welcome page
    When I press on the "Java" button
    Then I should be on the home page
    When I press the "Dashboard" button 
    Then I should be on the dashboard page
    When I click on the "Logout" button
    Then I should be on the landing page
    When I press the "Login" button
    And I fill in "Username" with "User1" 
    And I fill in "Password" with "Password1"
    When I press the "Login" button
    Then I should be on the home page
    Then I should see "Java"