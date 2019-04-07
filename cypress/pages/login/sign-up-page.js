
const SIGN_UP_BUTTON = '[type="submit"]';

class SignUpPage {

  static clickOnButtonByName(buttonName) {
    switch (buttonName) {
      case 'Sign Up': {
       cy.get(SIGN_UP_BUTTON).click();
        break;
      }
      default:
             throw Error('There is no ' + fieldName + 'element.');
    }
  }

}

export default SignUpPage;
