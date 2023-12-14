Feature: solving a problem using true false
    As a user, I want to learn syntax using true false
    So that I can test my knowledge.

Background: questions in database

  Given the following questions exist:
  | question        | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method          |
  | Answer is TRUE  | null      | null      | null      | TRUE   | Python          | control flow | truefalse       |
  | Answer is TRUE  | null      | null      | null      | TRUE   | Python          | control flow | truefalse       |
  | Answer is TRUE  | null      | null      | null      | TRUE   | Python          | control flow | truefalse       |
  | Answer is TRUE  | null      | null      | null      | TRUE   | Python          | control flow | truefalse       |
  | Answer is TRUE  | null      | null      | null      | TRUE   | Python          | control flow | truefalse       |

Scenario: Answer a question correctly
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

   When I press the "Control Flow" button
   When I press the "True/False" button
   Then I should be on the problems page
   Then I should see "TRUE"
   Then I should see "FALSE"
   Then I should see "Answer is TRUE"
   When I press the "TRUE" button
   Then I should see "Correct!"
   When I press the "Next" button 
   Then I should be on the problems page

Scenario: Answer a question incorrectly
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
   And I should see "Python"   

   When I press the "Control Flow" button
   When I press the "True/False" button
   Then I should be on the problems page
   Then I should see "TRUE"
   Then I should see "FALSE"
   Then I should see "Answer is TRUE"
   When I press the "FALSE" button
   Then I should see "Incorrect. The correct answer is:"
   When I press the "Next" button 
   Then I should be on the problems page

Scenario: Answer all the questions and see the results
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
   And I should see "Python"

   When I press the "Control Flow" button
   When I press the "True/False" button
   Then I should be on the problems page
   Then I should see "TRUE"
   Then I should see "FALSE"
   And I should see "1/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "2/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "3/5"
   Then I press the "FALSE" button
   Then I press the "Next" button
   And I should see "4/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "5/5"
   Then I press the "FALSE" button
   Then I press the "Finish" button
   Then I should see "Practice Complete!"
   And I should see "Your Score: 3 out of 5"
   And I should see "Questions Solved: +3"

Scenario: Answer all the questions then choose to do another round of practice
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
   And I should see "Python"
   
   
   When I press the "Control Flow" button
   When I press the "True/False" button
   Then I should be on the problems page
   Then I should see "TRUE"
   Then I should see "FALSE"
   And I should see "1/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "2/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "3/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "4/5"
   Then I press the "TRUE" button
   Then I press the "Next" button
   And I should see "5/5"
   Then I press the "FALSE" button
   Then I press the "Finish" button
   Then I should see "Practice Complete!"
   And I should see "Your Score: 4 out of 5"
   And I should see "Questions Solved: +4"
   And I should see "Home"
   And I should see "Again"
   Then I press the "Again" button
   Then I should see "TRUE"
   Then I should see "FALSE"

