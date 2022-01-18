/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"
import {basePage} from "../support/pages/basePage"



it('Replenishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePnoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4093206288191961', '0622', '111')
    cy.wait(2000)
    basePage.typeNameAndSurname('TARAS', 'SHEVCHENKO')
    cy.wait(5000)
    basePage.submitPayment()
    cy.wait(2000)
    mobileReplenishment.checkDebitCard('4093 **** **** 1961')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkPaymentCurrency('UAH')
    mobileReplenishment.checkDebitAmountAndComission('2')
    mobileReplenishment.checkComissionCurrency('UAH')
})


it.only('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4093206288191961', '0622', '111')
    basePage.typeNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    basePage.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    basePage.submitPayment()
    cy.wait(2000)
    transfers.checkDebitAndReceiverCards('4093 2062 8819 1961', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '389.81')
    transfers.checkDebitComission('89.81')
    transfers.checkComment('Cypress test')
})

















