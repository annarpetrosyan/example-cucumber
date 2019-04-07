import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pages/login/login-page';

When(/^I "([^"]*)" button should be disabled$/, (buttonName) => {
  LoginPage.getButtonStateByName(buttonName);
});

When(/^I fill "([^"]*)" value in "([^"]*)" field$/, (valueForFill, fieldName) => {
  LoginPage.fillValueInField(valueForFill, fieldName);
});

Then(/^I should see "([^"]*)" validation message for "([^"]*)" field$/, (validationMessage, fieldName) => {
  LoginPage.assertMessagesByField(validationMessage, fieldName);
});

Then(/^I should see "([^"]*)" value in "([^"]*)" field$/, (filledText, fieldName) => {
  LoginPage.assertFilledData(filledText, fieldName);
});

Given(/^I navigate to "([^"]*)" page$/, (pageName) => {
  LoginPage.visitByPageName(pageName);
});

Given(/^I navigate to Laravel Web page$/, () => {
  LoginPage.visit();
});

When(/^I fill randomly generated email value in "([^"]*)" field$/, (fieldName) => {
  LoginPage.fillRandomlyEmailInField(fieldName);
});

When(/^I should see "([^"]*)" text in header on Login Screen$/, (fieldName) => {
  LoginPage.compareHeaderOfLoginScreen(fieldName);
});

