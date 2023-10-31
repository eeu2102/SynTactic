Feature: solving a problem
    As a user, I want to answer questions.
    So that I can test my knowledge and receive feedback.


Scenario: Answer a question correctly
   Given I am on the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the correct answer
   Then I should see "Correct!”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a question incorrectly
   Given I am on the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a last question correctly
   Given I am on the problems page
   And I see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the correct answer
   Then I should see "Correct!”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a last question incorrectly
   Given I am on the problems page
   And I see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   When I press "Next"
   Then I should see "Practice Complete!"
   And I should see "Your Score:"
   And I should see "Questions Solved:"
   And I should see "Home"
   And I should see "Again"


   Given I am on the "Problem Modal"
   And it is the last question
   Then I should see a practice problem 
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   When I click "Next"
   Then I should see "Practice Complete!"
   And I should see "Your Score:"
   And I should see "Questions Solved:"
   And I should see "Home"
   And I should see "Again"


