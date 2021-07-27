import {
    ADD_RESERVATION,
    RESERVATION_LIST,
    ReservationActionTypes,
    SAVE_RESERVATION,
} from '../../acciones/Reservation/ReservationActionTypes';
import { Reservation } from 'app/feature/Reservation/models/Reservation';
import { StatusReservation } from '../../modelo/StatusReservation';

const initialState: StatusReservation = {
    reservationLists: Array<Reservation>(),
    reservation: {
        idTicket: 1,
        telefonoUsuario: 123,
        nombreUsuario: '',
        horaIngreso: 321,
        horaSalida: 321,
        idCancha: 1,
        valor: 50
    },
    idTicket: 1
};


export default function (
    state = initialState,
    action: ReservationActionTypes
): StatusReservation {
    switch (action.type) {
        case RESERVATION_LIST:
            return {
                ...state,
                reservationLists: action.payload,
            };
        case ADD_RESERVATION: {
            const reservation = action.payload;
            return {
                ...state,
                reservationLists: [...state.reservationLists, reservation]
            };
        }
        case SAVE_RESERVATION: {
            const reservation = action.payload;
            return {
                ...state,
                reservation: reservation
            };
        }

        default:
            return state;
    }
}