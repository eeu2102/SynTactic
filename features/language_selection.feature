Feature: selecting a language to learn
    As a user, I want to learn the syntax of a specific language
    So that I can improve the breadth of my coding abilities

Background: questions in database

  Given the following questions exist:
  | question           | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method         |
  | Python Question A  |           |           |           | A      | Python          | control flow | flash card     |
  | Python Question B  |           |           |           | B      | Python          | control flow | flash card     |
  | Python Question C  |           |           |           | C      | Python          | control flow | flash card     |
  | Python Question D  |           |           |           | D      | Python          | control flow | flash card     |
  | Python Question E  |           |           |           | E      | Python          | control flow | flash card     |
  | Java Question A    |           |           |           | A      | Java            | control flow | flash card     |
  | Java Question B    |           |           |           | B      | Java            | control flow | flash card     |
  | Java Question C    |           |           |           | C      | Java            | control flow | flash card     |
  | Java Question D    |           |           |           | D      | Java            | control flow | flash card     |
  | Java Question E    |           |           |           | E      | Java            | control flow | flash card     |
  | Ruby Question A    |           |           |           | A      | Ruby            | control flow | flash card     |
  | Ruby Question B    |           |           |           | B      | Ruby            | control flow | flash card     |
  | Ruby Question C    |           |           |           | C      | Ruby            | control flow | flash card     |
  | Ruby Question D    |           |           |           | D      | Ruby            | control flow | flash card     |
  | Ruby Question E    |           |           |           | E      | Ruby            | control flow | flash card     |




Scenario: Picking Java to practice 
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicajong"
    And I fill in "Password" with "testing1"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page
    When I press the "Java" button
    Then I should see "Java"
    Then I should be on the home page
   
    When I press the "Control Flow" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    Then I should see "Java Question"
    Then I should not see "Python Question"

Scenario: Picking Python to practice 
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicapong"
    And I fill in "Password" with "testing2"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page

    Given I am on the welcome page
    When I press the "Python" button
    Then I should see "Python"
    Then I should be on the home page
    When I press the "Control Flow" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    Then I should see "Python Question"
    Then I should not see "Java Question"

Scenario: Picking Ruby to practice 
    Given I am on the login page
    When I press the "Sign Up" button
    And I fill in "Username" with "jessicaong"
    And I fill in "Password" with "testing3"
    When I press the "Sign Up" button
    Then I should see "Welcome to SynTactic"
    Then I should be on the welcome page

    Given I am on the welcome page
    When I press the "Ruby" button
    Then I should see "Ruby"
    Then I should be on the home page
    When I press the "Control Flow" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    Then I should see "Ruby Question"
    Then I should not see "Java Question"



