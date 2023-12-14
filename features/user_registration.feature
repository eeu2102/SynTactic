Feature: User Registration
    As a user
    I want to register and log into the SynTactic platform
    So that I can access personalized syntax learning features

Scenario: Registering a New User
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing123"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
  
Scenario: Attempting to Register an Existing User
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing123"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
    When I press the "Python" button
    Then I should see "Python"
    Then I should be on the home page
     When I press the "Dashboard" button
    Then I should be on the dashboard page
    When I press the "Logout" button
    Then I should see "Login"
    Then I should be on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "567test"
    When I press the "Sign Up" button
    Then I should see "Username already exists. Please try another one."

Scenario: Logging In an Existing User
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing123"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
    When I press the "Python" button
    Then I should see "Python"
    Then I should be on the home page
    When I press the "Dashboard" button
    Then I should be on the dashboard page
    When I press the "Logout" button
    Then I should see "Login"
    Then I should be on the login page
    When I press the "Login" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing123"
    When I press the "Login" button
    Then I should see "Pick a review"
    Then I should be on the home page

Scenario: Registering another New User
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicapong"
    And I fill in "Password" with "testing456"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page

Scenario: Logging In with Wrong Password
Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing123"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
    When I press the "Python" button
    Then I should see "Python"
    Then I should be on the home page
    When I press the "Dashboard" button
    Then I should be on the dashboard page
    When I press the "Logout" button
    Then I should see "Login"
    Then I should be on the login page
    When I press the "Login" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "wrongpw"
    When I press the "Login" button
    Then I should see "Login failed. Please try again."

Scenario: Logging In with a Nonexisting User
    Given I am on the login page
    When I press the "Login" button
    And I fill in "Username" with "jessicaong"
    And I fill in "Password" with "testing123"
    When I press the "Login" button
    Then I should see "Login failed. Please try again."

Scenario: Ensuring the Language Preference Persists After Signing Up
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicaong"
    And I fill in "Password" with "testing3"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
    When I press the "Java" button
    Then I should see "Java"
    Then I should be on the home page
    When I press the "Dashboard" button 
    Then I should be on the dashboard page
    And I should see "Hi jessicaong"
    When I press the "Logout" button
    Then I should be on the login page
    Then I should see "Login"
    When I press the "Login" button
    And I fill in "Username" with "jessicaong" 
    And I fill in "Password" with "testing3"
    When I press the "Login" button
    Then I should see "Pick a review"
    Then I should be on the home page