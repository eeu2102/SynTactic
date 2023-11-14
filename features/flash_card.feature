Feature: solving a problem with flash cards
    As a user, I want to learn syntax using flash cards
    So that I can self-test my knowledge 

Background: questions in database

  Given the following questions exist:
  | question    | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method          |
  | Question A  |           |           |           | A      | Python          | control flow | flash cards     |
  | Question B  |           |           |           | B      | Python          | control flow | flash cards     |
  | Question C  |           |           |           | C      | Python          | control flow | flash cards     |
  | Question D  |           |           |           | D      | Python          | control flow | flash cards     |
  | Question E  |           |           |           | E      | Python          | control flow | flash cards     |


Scenario: Flip flash card for answer 
   Given I am on the login page
   When I press the "Sign Up" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Sign Up" button
   Then I should be on the welcome page
   When I press the "Python" button
   Then I should be on the home page

   When I press the "Control Flow" button
   When I press the "Flash Cards" button
   Then I should be on the problems page
   And I do not see "5/5"
   Then I should see "Question"
   When I press the "Flip Over" button
   Then I should see "Answer" 
   When I press the "Next" button 
   Then I should be on the problems page

Scenario: Finish all flash cards and see results
   Given I am on the login page
   When I press the "Login" button
   And I fill in "Username" with "jessicajong"
   And I fill in "Password" with "testing123"
   When I press the "Login" button
   Then I should be on the home page
   And I should see "Python" 
   
   When I press the "Control Flow" button
   When I press the "Flash Cards" button
   Then I should be on the problems page
   And I should see "1/5"
   Then I press the "Next" button
   And I should see "2/5"
   Then I press the "Next" button
   And I should see "3/5"
   Then I press the "Next" button
   And I should see "4/5"
   Then I press the "Next" button
   And I should see "5/5"
   Then I press the "Next" button
   Then I should see "Practice Complete!"

