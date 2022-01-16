/// <reference types="Cypress" />

describe('Mobile phone replenishment', () => {

const cypress = require("cypress")

    context ('Replenishment less than the aloowed amount', () => {

        it ('Show error: Minimum amount of the replenichment 1 UAH', () => {});
});

});

it('By ID', () => {
  cy.visit('https://facebook.com')
  cy.get('#email')
});

it('By Class', () => {
   cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
   cy.get('.ds-input')
    });


it('By Tag', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('button')
    }); 

it('By Tag value', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[name="login"]')
});


it('By Diffent Tag', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});       



it('By Diffent Types', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('button[type="submit"][name="login"]')
});


it('By Contains name', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
});


it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(1)
});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('aside').find ('div').find('div').find('button').eq(3)
});

