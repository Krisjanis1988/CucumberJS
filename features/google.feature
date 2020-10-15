Feature: Account creation

  Background: Language used is English and Currency USD
    Given I am in Main page
    Then select language "English (UK)" from the dropdown list
    And select currency "U.S. dollar" from the dropdown list
    

  Scenario: Account creation
    Given I am in Sign Up page
    When I enter valid user email
    And click on GET STARTED button
    And I enter valid password
    And click on CREATE ACCOUNT button 
    And I click on MY DASHBOARD button in Main page under account menu 
    Then correct value is prefilled in email verification placeholder in My Dashboard page


