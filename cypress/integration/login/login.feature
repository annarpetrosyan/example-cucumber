Feature: Login Screen functionality
  @e2e-test
  Scenario: Check Sign Up disable state
    Given I navigate to Laravel Web page
    Then I "Sign up" button should be disabled

  Scenario: Check Validation of Email field in Login screen
    Given I navigate to Laravel Web page
    When I fill "test" value in "Email" field
    Then I should see "Email is incorrect" validation message for "Email" field

  Scenario: Check Validation of Email field in Login screen
    Given I navigate to Laravel Web page
    When I fill "1" value in "Password" field
    Then I should see "Password must be at least 4 characters long" validation message for "Password" field

  Scenario: Check fill function of Email field
    Given I navigate to Laravel Web page
    When I fill "test@aa.aa" value in "Email" field
    Then I should see "test@aa.aa" value in "Email" field


  Scenario: Check fill function of Password field
    Given I navigate to Laravel Web page
    When I fill "p@ssw0rdTest!" value in "Password" field
    Then I should see "p@ssw0rdTest!" value in "Password" field

  Scenario: Check Sign Up functionality
    Given I navigate to Laravel Web page
    When I navigate to "Sign Up" page
    Then I fill randomly generated email value in "Email" field
    Then I fill "p@ssw0rdTest!" value in "Password" field
    Then I click on "Sign Up" button - In Sign Up page
    Then I wait 10 seconds to load the page
    Then I should see "Provide your information" value as the Header of Main page

  Scenario: Check Welcome message in English language
    Given I navigate to Laravel Web page
    Then I should see "Welcome to digital food safety" text in header on Login Screen


