const { createYield } = require("typescript");

context('Test Cases', function() {

  it('Hello World', () => {
      cy.visit('http://localhost:5000/')
      var test = Cypress.env('TEST'); 
      cy.get('h1').contains('Hello, world!');
    });
});
