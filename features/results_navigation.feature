Feature: navigating away from the results
    As a user, I want navigate out of my results after completing a set of questions
    So that I can view my homepage or repeat the question set.

Background: questions in database

  Given the following questions exist:
  | question     | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method          |
  | Answer is B  | wrong     | correct   | choice 3  | B      | Python          | control flow | multiple choice |
  | Answer is A  | correct   | wrong     | choice 3  | A      | Python          | control flow | multiple choice |
  | Answer is C  | wrong     | choice 2  | correct   | C      | Python          | control flow | multiple choice |
  | Answer is C  | choice 1  | wrong     | correct   | C      | Python          | control flow | multiple choice |
  | Answer is A  | correct   | choice 2  | wrong     | A      | Python          | control flow | multiple choice |


Scenario: Navigate from results modal to Home Page
   Given I am on the login page
   When I press on the "Sign Up" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Sign Up" button
   Then I should be on the welcome page
   When I press on the "Python" button
   Then I should be on the home page

   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   And I should see "1/5"
   Then I press the "correct" button
   Then I press the "Next" button
   And I should see "2/5"
   Then I press the "wrong" button
   Then I press the "Next" button
   And I should see "3/5"
   Then I press the "correct" button
   Then I press the "Next" button
   And I should see "4/5"
   Then I press the "wrong" button
   Then I press the "Next" button
   And I should see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   Then I press the "wrong" button
   Then I should see "Incorrect. The correct answer is:"
   When I press the "Next" button
   Then I should see "Practice Complete!"
   And I should see "Your Score:"
   And I should see "Questions Solved:"
   And I should see "Home"
   And I should see "Again"
   When I press the "Home" button
   Then I should be on the home page


Scenario: Repeat the set of questions from results modal
   Given I am on the login page
   When I press on the "Login" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Login" button
   Then I should be on the home page
   And I should see "Python"

   Given I am on the home page
   When I press the "Control Flow" button
   When I press the "Multiple Choice" button
   Then I should be on the problems page
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   And I should see "1/5"
   Then I press the "correct" button
   Then I press the "Next" button
   And I should see "2/5"
   Then I press the "wrong" button
   Then I press the "Next" button
   And I should see "3/5"
   Then I press the "correct" button
   Then I press the "Next" button
   And I should see "4/5"
   Then I press the "wrong" button
   Then I press the "Next" button
   And I should see "5/5"
   Then I should see "A"
   Then I should see "B"
   Then I should see "C"
   Then I press the "wrong" button
   Then I should see "Incorrect. The correct answer is:"
   When I press the "Next" button
   Then I should see "Practice Complete!"
   And I should see "Your Score:"
   And I should see "Questions Solved:"
   And I should see "Home"
   And I should see "Again"
   When I press the "Again" button
   Then I should be on the problems page
