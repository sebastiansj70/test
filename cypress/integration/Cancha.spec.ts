/// <reference types="cypress" />

describe('Cancha', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/cancha')
    })

    it('frontpage can be opened', () => {
        cy.contains('Crear Cancha')
    })

    it('create new Cancha ', () => {
        cy.contains('Nueva').click()
        cy.get('input[name="idCancha"]').type('6')
        cy.get('input[name="statusCancha"]').type('Buena')
        cy.contains('Registrar').click()
    })


    it('update cancha', () => {
        cy.contains('Canchas').click()
        cy.get('div[id="canchaList"]').first().click()
        cy.get('input[name="statusCancha"]').clear()
        cy.get('input[name="statusCancha"]').type('Malo')
        cy.get('button[name="Actualizar"]').click()
        cy.get('div[id="canchaList"]').last().click()
        cy.get('input[name="statusCancha"]').clear()
        cy.get('input[name="statusCancha"]').type('bueno')
        cy.get('button[name="Actualizar"]').click()
    })
})