Feature: Products
  Scenario: Browse products
    Given I am on the homepage
    When I open the products catalog
    Then products should be displayed
