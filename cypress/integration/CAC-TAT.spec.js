/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => cy.visit('src/index.html'));

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').should('be.visible').type('Victor').should('have.value', 'Victor');
        cy.get('#lastName').should('be.visible').type('Torres').should('have.value', 'Torres');
        cy.get('#email').should('be.visible').type('torresvictor@email.com').should('have.value', 'torresvictor@email.com');
        cy.get('#open-text-area').should('be.visible').type('Preciso de Ajuda!').should('have.value', 'Preciso de Ajuda!');
        cy.get('button[type="submit"]').click();
        
        cy.get('.success').should('be.visible');
    })
  })


  