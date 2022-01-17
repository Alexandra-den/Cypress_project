/// <reference types="Cypress" />



it('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('686979712')
        .get('[data-qa-node="amount"]')
        .type('1')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4093206288191961')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0622')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('TARAS')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('SHEVCHENKO')
        .wait(5000)
        .get('[data-qa-node="submit"]')
        .click()
        .wait(2000)
        .get('[data-qa-node="card"]')
        .should('have.text', '4093 **** **** 1961')
        .get('[data-qa-node="amount"]')
        .should('contains.text', '1')
        .get('[data-qa-node="currency"]')
        .eq(0)
        .should('have.text', 'UAH') 
        .get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', '2')
        .get('[data-qa-node="commission-currency"]')
        .should('contains.text', 'UAH')

})


it.only('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4093206288191961')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0622')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('Shayne')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('McConnell')
        .get('[data-qa-node="numberreceiver"]')
        .type('5309233034765085')
        .get('[data-qa-node="amount"]')
        .type('300')
        .get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type('Cypress test')
        .get('[type="submit"]')
        .wait(2000)
        .click()
        .get('[data-qa-node="payer-card"]')
        .should('have.text', '4093 2062 8819 1961')
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', '5309 2330 3476 5085')
        .get('[data-qa-node="payer-amount"]')
        .should('have.text', '300 UAH')
        .get('[data-qa-node="payer-currency"]')
        .should('have.text', '89.57 UAH')
        .find('span')
        .should('contains.text', '389.57')
        .get('[data-qa-node="total"]')
        .find('small')
        .should('contains.text','UAH')
        .get('[data-qa-node="comment"]')
        .should('have.text','Cypress test')
})




















