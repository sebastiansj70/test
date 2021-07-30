/// <reference types="cypress" />

describe('Ticket', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/ticket')
    })

    it('frontpage can be opened', () => {
        cy.contains('Crear Reservacion')
    })

    it('click on the new tab ', () => {
        cy.contains('Nueva').click()
    })

    it('create new ticket ', () => {
        cy.contains('Nueva').click()
        cy.get('input[name="telefonoUsuario"]').type('3186905006')
        cy.get('input[name="nombreUsuario"]').type('Juan')
        cy.get('input[name="horaIngreso"]').type('1626283800000')
        cy.get('input[name="horaSalida"]').type('1626283800000')
        cy.get('input[name="idCancha"]').type('1')
        cy.get('input[name="valor"]').type('50000')
        cy.contains('Registrar').click()
    })

    it('click on Tickets', () => {
        cy.contains('Reservaciones').click()
    })

    it('update ticket', () => {
        cy.contains('Reservaciones').click()
        cy.get('div[id="ticketsList"]').first().click()
        cy.get('input[name="nombreUsuario"]').clear()
        cy.get('input[name="nombreUsuario"]').type('Juan Sebastian')
        cy.get('button[name="Actualizar"]').click()
    })
})