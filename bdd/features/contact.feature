Feature: Contact Us
  Scenario: Submit contact form
    Given I am on the homepage
    When I submit the contact form with attachment
    Then the contact form succeeds
