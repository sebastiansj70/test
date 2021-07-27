import { Reservation } from 'app/feature/Reservation/models/Reservation';
import { StatusReservation } from 'app/core/redux/modelo/StatusReservation';
import { addNewReservation } from 'app/core/redux/acciones/Reservation/ReservationActions';
import reductorProductos from './reservationReductor';

describe('Reductor tickets', () => {
    it('debería agregar ticket', () => {
        // Arrange
        const estadoInicial: StatusReservation = {
            reservationLists: [],
            reservation: {
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
        const nuevoTicket: Reservation = {
            idTicket: 1,
            telefonoUsuario: 3186905006,
            nombreUsuario: 'Juan',
            horaIngreso: 20210716005923,
            horaSalida: 20210716005923,
            idCancha: 1,
            valor: 50
        };
        const estadoEsperado: StatusReservation = {
            ...estadoInicial,
            reservationLists: [nuevoTicket],
        };

        // Act
        const nuevoEstado = reductorProductos(
            estadoInicial,
            addNewReservation(nuevoTicket)
        );

        // Assert
        expect(nuevoEstado).toStrictEqual(estadoEsperado);
    });
});
