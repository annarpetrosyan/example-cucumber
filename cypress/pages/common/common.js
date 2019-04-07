class CommonPage {

  static waitToLoad(timToWait){
    const mlSecToSec = timToWait * 1000;
    cy.wait(mlSecToSec);
  }
}

export default CommonPage;
