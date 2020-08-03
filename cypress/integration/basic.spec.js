/// <reference types="Cypress"/>

describe('Crypress basic', () =>{
    it('acessando a primeira pagina e fazendo assert', () =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contains', 'de Treinamento')
    })
})