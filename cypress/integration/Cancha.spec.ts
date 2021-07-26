/// <reference types="cypress" />

describe('Cancha', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/cancha')
    })

    it('frontpage can be opened', () => {
        cy.contains('Crear Cancha')
    })

    it('create new ticket ', () => {
        cy.contains('Nueva').click()
        cy.get('input[name="idCancha"]').type('6')
        cy.get('input[name="statusCancha"]').type('Buena')
        cy.contains('Registrar').click()
    })
})