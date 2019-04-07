const LANGUAGE_BUTTON = 'a[class=nav-link]';


class LoginPage {
  static visit() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  }


  static visitByPageName(pageName) {
    switch (pageName) {
      case 'Sign Up':{
        cy.visit('/auth/register');
        break
      }
      default: throw Error("There is no " + " page.")
    }
  }

  static getButtonStateByName(buttonName){
    var buttonElem = '';
    switch (buttonName) {
      case 'Sign up': {
        buttonElem = cy.get('[type="submit"]');
        break;
      }
     default:
        throw Error('There is no ' + fieldName + 'element.');
    }
     buttonElem.should('be.disabled');
   }


  static fillValueInField(valueForFill, fieldName) {
    var elementForFill = '';
    switch (fieldName) {
      case 'Email': {
        elementForFill = cy.get('#email');
        break;
      }
      case 'Password': {
        elementForFill = cy.get('#password');
        break;
      }
      default:
        throw Error('There is no ' + fieldName + 'element.');
    }
    elementForFill.type(valueForFill);
  }


  static assertMessagesByField(validationMessage, fieldName) {
    var elementToGetMessage = '';
    switch (fieldName) {
      case 'Email': {
        elementToGetMessage = cy.get('[class="text-danger"]');
        break;
      }
      case 'Password': {
        elementToGetMessage = cy.get('[class="text-danger"]');
        break;
      }
      default:
        throw Error('There is no ' + fieldName + 'element.');
    }
    elementToGetMessage.contains(validationMessage);
  }

  static assertFilledData(filledText, fieldName) {
    var elementToGetFilledText = '';
    switch (fieldName) {
      case 'Email': {
        elementToGetFilledText = cy.get('#email');
        break;
      }
      case 'Password': {
        elementToGetFilledText = cy.get('#password');
        break;
      }
      default:
        throw Error('There is no ' + fieldName + 'element.');
    }
    elementToGetFilledText.should('have.value', filledText)
  }


  static fillRandomlyEmailInField(fieldName) {
    var textForFill = new Date().valueOf();
    var elementForFill = '';
    switch (fieldName) {
      case 'Email': {
        elementForFill = cy.get('#email');
        break;
      }
      default:
        throw Error('There is no ' + fieldName + 'element.');
    }
    elementForFill.type(textForFill + "@aa.aa");
  }

  static compareHeaderOfLoginScreen(textForCompare){
    cy.get('h1').contains(textForCompare);
  }


}

export default LoginPage;
