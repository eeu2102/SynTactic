Feature: navigating to and from the dashboard page
    As a user, I want to navigate to and from the dashboard page.
    So that I can track my progress and solve more problems.

Scenario: Navigate from Home Page to Dashboard Page
  Given I am on the home page
  When I press the "Dashboard" button
  Then I should be on the dashboard page
  And I should see "Hi"
  And I should see "Questions Solved:"
  And I should see "Home"

Scenario: Navigate from Profile Page to Home Page
   Given I am on the dashboard page
   When I press the "Home" button
   Then I should be on the home page
   And I should see "Declaration and Instantiation"
   And I should see "Control Flow"
   And I should see "Data Structures"


