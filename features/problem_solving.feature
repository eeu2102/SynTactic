Feature: solving a problem
    As a user, I want to answer questions.
    So that I can test my knowledge and receive feedback.


Scenario: Answer a question correctly
   Given I am on the problems page
   And it is not the last question
   Then I should see a practice problem 
   When I select the correct answer
   Then I should see "Correct!”.
   When I click "Next"
   Then I should see another practice problem

Scenario: Answer a question incorrectly
   Given I am on the problems page
   And it is not the last question
   Then I should see a practice problem 
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   Then I click "Next" 
   And I should see another practice problem

Scenario: Answer a last question correctly
   Given I am on the problems page
   And it is the last question
   Then I should see a practice problem 
   When I select the correct answer
   Then I should see "Correct!”.
   When I click "Next"
   Then I should be taken to the "Results Modal" and see my results.

Scenario: Answer a last question incorrectly
   Given I am on the "Problem Modal"
   And it is the last question
   Then I should see a practice problem 
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   When I click "Next"
   Then I should be taken to the "Results Modal" and see my results.


