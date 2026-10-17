Feature: Signup
  Scenario: Create a new account
    Given I am on the signup login page
    When I register a unique account
    Then my account is created
