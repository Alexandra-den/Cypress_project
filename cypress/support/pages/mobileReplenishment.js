export class MobilePhoneReplenishment {
    typePnoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
           .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
           .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
           .type(cardNumber)
           .get('[data-qa-node="expiredebitSource"]')
           .type(expDate)
           .get('[data-qa-node="cvvdebitSource"]')
           .type(cvv)
    }

    typeNameAndSurname(firstNamedebitSource, lastNamedebitSource){
        cy.get('[data-qa-node="firstNamedebitSource"]')
           .type(firstNamedebitSource)
           .get('[data-qa-node="lastNamedebitSource"]')
           .type(lastNamedebitSource)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
           .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
           .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
           .should('contains.text', debitAmount)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="currency"]')
        .eq(0)
        .should('have.text', paymentCurrency) 
    }

    checkDebitAmountAndComission(debitComission){
        cy.get('[data-qa-node="commission"]')
           .eq(1)
           .should('have.text', debitComission)
    }

    checkComissionCurrency(comissionCurrency){
        cy.get('[data-qa-node="commission-currency"]')
           .should('contains.text', comissionCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()