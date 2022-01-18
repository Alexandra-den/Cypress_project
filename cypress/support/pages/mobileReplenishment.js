export class MobilePhoneReplenishment {
    typePnoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
           .type(phoneNumber)
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