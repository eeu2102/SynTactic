Feature: solving a problem
    As a user, I want to answer questions.
    So that I can test my knowledge and receive feedback.

Background: questions have been added to database

  Given the following questions exist:
  | ID | question     | choice_a | choice_b | choice_c | answer | coding_language | category     | method          |
  | 1  | Answer is B  | choice 1 | choice 2 | choice 3 | B      | Python          | control flow | multiple choice |
  | 2  | Answer is A  | choice 1 | choice 2 | choice 3 | A      | Python          | control flow | multiple choice |
  | 3  | Answer is C  | choice 1 | choice 2 | choice 3 | C      | Python          | control flow | multiple choice |
  | 4  | Answer is C  | choice 1 | choice 2 | choice 3 | C      | Python          | control flow | multiple choice |
  | 5  | Answer is A  | choice 1 | choice 2 | choice 3 | A      | Python          | control flow | multiple choice |

  And I am on the home page
  Then 5 seed questions should exist

Scenario: Answer a question correctly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be taken to the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the correct answer
   Then I should see "Correct!”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a question incorrectly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be taken to the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the incorrect answer
   Then I should see "Incorrect. The answer is “” ”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a last question correctly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be taken to the problems page
   And I see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I select the correct answer
   Then I should see "Correct!”.
   When I press "Next"
   Then I should be taken to the problems page

Scenario: Answer a last question incorrectly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be taken to the problems page
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


