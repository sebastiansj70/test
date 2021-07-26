import { EstadoTicket } from 'app/core/redux/modelo/EstadoTicket';
import { Ticket } from 'app/feature/Reserva/models/Ticket';
import { agregarNuevoTicket } from 'app/core/redux/acciones/Ticket/TicketAcciones';
import reductorProductos from './ticketReductor';

describe('Reductor tickets', () => {
    it('debería agregar ticket', () => {
        // Arrange
        const estadoInicial: EstadoTicket = {
            ticket: [],
            ticketNew: {
                idTicket: 1,
                telefonoUsuario: 321,
                nombreUsuario: '',
                horaIngreso: 121,
                horaSalida: 321,
                idCancha: 1,
                valor: 50
            },
            idTicket: 1,
        };
        const nuevoTicket: Ticket = {
            idTicket: 1,
            telefonoUsuario: 3186905006,
            nombreUsuario: 'Juan',
            horaIngreso: 20210716005923,
            horaSalida: 20210716005923,
            idCancha: 1,
            valor: 50
        };
        const estadoEsperado: EstadoTicket = {
            ...estadoInicial,
            ticket: [nuevoTicket],
        };

        // Act
        const nuevoEstado = reductorProductos(
            estadoInicial,
            agregarNuevoTicket(nuevoTicket)
        );

        // Assert
        expect(nuevoEstado).toStrictEqual(estadoEsperado);
    });
});
