Feature: solving a problem
    As a user, I want to answer questions.
    So that I can test my knowledge and receive feedback.

Background: questions in database

  Given the following questions exist:
  | question     | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method          |
  | Answer is B  | wrong     | correct   | choice 3  | B      | Python          | control flow | multiple choice |
  | Answer is A  | correct   | wrong     | choice 3  | A      | Python          | control flow | multiple choice |
  | Answer is C  | wrong     | choice 2  | correct   | C      | Python          | control flow | multiple choice |
  | Answer is C  | choice 1  | wrong     | correct   | C      | Python          | control flow | multiple choice |
  | Answer is A  | correct   | choice 2  | wrong     | A      | Python          | control flow | multiple choice |

Scenario: Answer a question correctly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I press the "correct" button
   Then I should see "Correct!”.
   When I press the "Next" button 
   Then I should be on the problems page

Scenario: Answer a question incorrectly
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   And I do not see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   When I press the "wrong" button
   Then I should see "Incorrect. The correct answer is: correct”.
   When I press the "Next" button 
   Then I should be on the problems page

Scenario: Answer all the questions and see the results
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   And I see "1/5"
   Then I press the "correct" button
   Then I press the "next" button
   And I see "2/5"
   Then I press the "wrong" button
   Then I press the "next" button
   And I see "3/5"
   Then I press the "correct" button
   Then I press the "next" button
   And I see "4/5"
   Then I press the "wrong" button
   Then I press the "next" button
   And I see "5/5"
   Then I press the "correct" button
   Then I press the "next" button
   Then I should see "Practice Complete!"
   And I should see "Your Score: 3 out of 5"
   And I should see "Questions Solved: +3“

Scenario: Answer all the questions then choose to do another round of practice
   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   And I see "1/5"
   Then I press the "correct" button
   Then I press the "next" button
   And I see "2/5"
   Then I press the "wrong" button
   Then I press the "next" button
   And I see "3/5"
   Then I press the "correct" button
   Then I press the "next" button
   And I see "4/5"
   Then I press the "wrong" button
   Then I press the "next" button
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


