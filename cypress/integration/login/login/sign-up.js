import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignUpPage from '../../../pages/login/sign-up-page';
import MainPage from "../../../pages/main/main-page";


When(/^I click on "([^"]*)" button - In Sign Up page$/, (buttonName) => {
  SignUpPage.clickOnButtonByName(buttonName);
});

Then(/^I should see "([^"]*)" value as the Header of Main page$/, (message) => {
  MainPage.compareH1HeaderMessage(message);
});
