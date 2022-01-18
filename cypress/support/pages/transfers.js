export class Transfers {

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

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
           .type(receiverCard)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
           .type(amount)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
           .click()
           .get('[data-qa-node="comment"]')
           .type(comment)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
           .click()
    }

    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
           .should('have.text', debitCard)
           .get('[data-qa-node="receiver-card"]')
           .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
           .should('have.text', debitAmount)
           .get('[data-qa-node="total"]')
           .find('span')
           .should('contains.text', totalAmount)
    }

    checkDebitComission(comission){
        cy.get('[data-qa-node="payer-currency"]')
           .should('have.text', comission)
    }

    checkTotalCurrency(currency){
        cy.get('[data-qa-node="total"]')
           .find('small')
           .should('contains.text', currency)
    }

    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
           .should('have.text', comment) 
    }
}

export const transfers = new Transfers()