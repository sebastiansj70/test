import {
    AGREGAR_TICKET,
    ELIMINAR_TICKET,
    LISTAR_TICKETS,
    ACTUALIZAR_TICKET,
    TiposAccionesTicket,
    GUARDAR_TICKET,
    GETID_TICKET,
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
}


export default function (
    state = initialState,
    action: TiposAccionesTicket
): EstadoTicket {
    switch (action.type) {
        case LISTAR_TICKETS:
            console.log(action, 'LISTAR_TICKETS')
            const ticket = action.payload;
            return {
                ...state,
                ticket,
            };
        case AGREGAR_TICKET: {
            console.log(action, 'AGREGAR_TICKET')
            const ticket = action.payload
            return {
                ...state,
                ticket: [...state.ticket, ticket]
            }
        }
        case GUARDAR_TICKET: {
            const ticket = action.payload
            console.log(action, 'GUARDAR_TICKET')
            return {
                ...state,
                ticketNew: ticket
            }
        }

        case GETID_TICKET: {
            const idticket = action.payload
            console.log(action, 'GETID_TICKET')
            return {
                ...state,
                // idTicket:idticket
            }
        }
        default:
            return state;
    }
}