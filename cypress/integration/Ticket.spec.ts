/// <reference types="cypress" />

describe('Ticket', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/ticket')
    })

    it('frontpage can be opened', () => {
        cy.contains('Crear Ticket')
    })

    it('click on the new tab ', () => {
        cy.contains('Nuevo').click()
    })

    it('create new ticket ', () => {
        cy.contains('Nuevo').click()
        cy.get('input[name="telefonoUsuario"]').type('3186905006')
        cy.get('input[name="nombreUsuario"]').type('Juan')
        cy.get('input[name="horaIngreso"]').type('1626283800000')
        cy.get('input[name="horaSalida"]').type('1626283800000')
        cy.get('input[name="idCancha"]').type('1')
        cy.get('input[name="valor"]').type('50000')
        cy.contains('Registrar').click()
    })

    it('click on Tickets', () => {
        cy.contains('Tickets').click()
    })

    it('update ticket', () => {
        cy.contains('Tickets').click()
        cy.get('div[id="ticketsList"]').first().click()
        cy.get('input[name="nombreUsuario"]').clear()
        cy.get('input[name="nombreUsuario"]').type('Juan Sebastian')
        cy.get('button[name="Actualizar"]').click()
    })
})