Feature: selecting a language to learn
    As a user, I want to learn the syntax of a specific language
    So that I can improve the breadth of my coding abilities

Background: questions in database

  Given the following questions exist:
  | question           | choice_a  | choice_b  | choice_c  | answer | coding_language | category     | method          |
  | Python Question A  |           |           |           | A      | Python          | control flow | flash cards     |
  | Python Question B  |           |           |           | B      | Python          | control flow | flash cards     |
  | Python Question C  |           |           |           | C      | Python          | control flow | flash cards     |
  | Python Question D  |           |           |           | D      | Python          | control flow | flash cards     |
  | Python Question E  |           |           |           | E      | Python          | control flow | flash cards     |
  | Java Question A    |           |           |           | A      | Java            | control flow | flash cards     |
  | Java Question B    |           |           |           | B      | Java            | control flow | flash cards     |
  | Java Question C    |           |           |           | C      | Java            | control flow | flash cards     |
  | Java Question D    |           |           |           | D      | Java            | control flow | flash cards     |
  | Java Question E    |           |           |           | E      | Java            | control flow | flash cards     |


Scenario: Picking Java to practice 
    Given I am on the welcome page
    When I press the "Java" button
    Then I should be on the home page
    When I press the "Control Flow" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    Then I should see "Java Question"
    Then I should not see "Python Question"

Scenario: Picking Python to practice 
    Given I am on the welcome page
    When I press the "Python" button
    Then I should be on the home page
    When I press the "Control Flow" button
    When I press the "Flash Cards" button
    Then I should be on the problems page
    Then I should see "Python Question"
    Then I should not see "Java Question"



