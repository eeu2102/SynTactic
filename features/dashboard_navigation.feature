Feature: navigating to and from the dashboard page
    As a user, I want to navigate to and from the dashboard page.
    So that I can track my progress and solve more problems.

Scenario: Navigate from Home Page to Dashboard Page
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
  And I should see "Hi"
  And I should see "Questions Solved:"
  And I should see "Home"

Scenario: Navigate from Dashboard Page to Home Page
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
  And I should see "Hi"
  And I should see "Questions Solved:"
  And I should see "Home"
  When I press the "Logout" button
  Then I should see "Login"
  Then I should be on the login page
  When I press the "Login" button
  And I fill in "Username" with "jessicajong"
  And I fill in "Password" with "testing123"
  When I press the "Login" button
  Then I should see "Pick a review"
  Then I should be on the home page
  When I press the "Dashboard" button
  Then I should be on the dashboard page
  Given I am on the dashboard page
  When I press the "Home" button
  Then I should be on the home page
  And I should see "Declaration and Instantiation"
  And I should see "Control Flow"
  And I should see "Data Structures"

Scenario: Navigate from Problems Page to Dashboard Page
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
  When I press the "Declaration and Instantiation" button
  When I press the "Multiple Choice" button
  When I press the "Dashboard" button
  Then I should be on the dashboard page
  And I should see "Hi"
  And I should see "Questions Solved:"
  And I should see "Home"

Scenario: Navigate from Problems Page to Home Page
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
  When I press the "Declaration and Instantiation" button
  When I press the "Multiple Choice" button
  When I press the "<SynTactic>" button
  Then I should be on the home page
  And I should see "Declaration and Instantiation"
  And I should see "Control Flow"
  And I should see "Data Structures"

Scenario: Navigate from Dashboard Page to Home Page, Using the Home button
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
  When I press the "Home" button
  Then I should be on the home page
  And I should see "Declaration and Instantiation"
  And I should see "Control Flow"
  And I should see "Data Structures"

Scenario: Navigate from Dashboard Page to Login Page
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
  And I should see "Sign Up"
  And I should see "Login"
  Then I should be on the login page

