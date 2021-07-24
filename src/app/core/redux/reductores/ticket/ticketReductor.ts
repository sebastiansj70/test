import {
    AGREGAR_TICKET,
    GETID_TICKET,
    GUARDAR_TICKET,
    LISTAR_TICKETS,
    TiposAccionesTicket,
} from '../../acciones/Ticket/TicketTiposAcciones';
import { EstadoTicket } from '../../modelo/EstadoTicket';
import { Ticket } from 'app/feature/Ticket/models/Ticket';

const initialState: EstadoTicket = {
    ticket: Array<Ticket>(),
    ticketNew: {
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
    action: TiposAccionesTicket
): EstadoTicket {
    switch (action.type) {
        case LISTAR_TICKETS:
            return {
                ...state,
                ticket: action.payload,
            };
        case AGREGAR_TICKET: {
            const ticket = action.payload;
            return {
                ...state,
                ticket: [...state.ticket, ticket]
            };
        }
        case GUARDAR_TICKET: {
            const ticket = action.payload;
            return {
                ...state,
                ticketNew: ticket
            };
        }

        case GETID_TICKET: {
            const idticket = action.payload;
            return {
                ...state,
                // idTicket:idticket
            };
        }
        default:
            return state;
    }
}