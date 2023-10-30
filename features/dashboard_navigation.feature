Feature: navigating to and from the dashboard page
    As a user, I want to navigate to and from the dashboard page.
    So that I can track my progress and solve more problems.

Scenario: Navigate from Home Page to Profile Page
   Given I am on the "Home Page Modal"
   When I click the "Profile" icon
  Then I should be taken to the "Profile Modal" to see the username and number of questions solved.

Scenario: Navigate from Profile Page to Home Page
   Given I am on the "Profile Modal"
   When I click the "Syntactic" logo
   Then I should be taken to the "Home Page Modal".
