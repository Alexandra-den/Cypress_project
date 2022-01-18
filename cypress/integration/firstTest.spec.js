/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"



it('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePnoneNumber('686979712')
    mobileReplenishment.typeAmount('1')
    mobileReplenishment.typeDebitCardData('4093206288191961', '0622', '111')
    cy.wait(2000)
    mobileReplenishment.typeNameAndSurname('TARAS', 'SHEVCHENKO')
    cy.wait(5000)
    mobileReplenishment.submitPayment()
    cy.wait(2000)
    mobileReplenishment.checkDebitCard('4093 **** **** 1961')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkPaymentCurrency('UAH')
    mobileReplenishment.checkDebitAmountAndComission('2')
    mobileReplenishment.checkComissionCurrency('UAH')
})


it.only('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    transfers.typeDebitCardData('4093206288191961', '0622', '111')
    transfers.typeNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    transfers.submitPayment()
    transfers.checkDebitAndReceiverCards('4093 2062 8819 1961', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '389.57')
    transfers.checkDebitComission('89.57 UAH')
    transfers.checkTotalCurrency('UAH')
    transfers.checkComment('Cypress test')
})




















