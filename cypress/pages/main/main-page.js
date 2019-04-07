

class MainPage {


  static compareH1HeaderMessage(message){
    cy.get('h1').contains(message);
  }

}

export default MainPage;
