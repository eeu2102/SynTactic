Feature: navigating away from the results
    As a user, I want navigate out of my results after completing a set of questions
    So that I can view my homepage or repeat the question set.

Scenario: Navigate from results modal to Home Page
   Given I am on the problems page
   And I see "5/5"
   When I press the button containing the text "A"
   When I press "Next"
   When I press the "Home" button
   Then I should be taken to the home page


Scenario: Repeat the set of questions from results modal
   Given I am on the problems page
   And I see "5/5"
   When I press the button containing the text "A"
   When I press "Next"
   When I press the ‘Again" button
   Then I should be taken to the problems page
