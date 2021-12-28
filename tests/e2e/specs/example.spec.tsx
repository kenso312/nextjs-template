/// <reference types="cypress"/>

describe('Example', () => {
  it('should render the index page and display a message', () => {
    cy.visit('http://localhost:3000/_template');
    cy.get('h1').contains('Welcome');
  });
});

export {};
