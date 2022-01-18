export class Transfers {

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
           .type(receiverCard)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
           .click()
           .get('[data-qa-node="comment"]')
           .type(comment)
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
           .find('div')
           .should('contains.text', totalAmount)
    }

    checkDebitComission(comission){
        cy.get('[data-qa-node="payer-currency"]')
           .should('contains.text', comission)
    }

    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
           .should('have.text', comment) 
    }
}

export const transfers = new Transfers()