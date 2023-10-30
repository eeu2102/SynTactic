Feature: navigating away from the results
    As a user, I want navigate out of my results after completing a set of questions
    So that I can view my homepage or repeat the question set.

Scenario: Navigate back to Home Page
   Given I am on the "Results Modal"
   When I click "Home"
   Then I should be taken to the "Home Page Modal".

Scenario: Repeat the set of questions
   Given I am on the "Results Modal"
   When I click ‘Again"
   Then I should be taken to the "Problem Modal" to repeat this set of questions.
