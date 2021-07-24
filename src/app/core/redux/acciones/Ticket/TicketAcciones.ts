import {
    ACTUALIZAR_TICKET,
    AGREGAR_TICKET,
    ELIMINAR_TICKET,
    GETID_TICKET,
    GUARDAR_TICKET,
    LISTAR_TICKETS,
    TiposAccionesTicket
} from './TicketTiposAcciones';
import { Ticket } from 'app/feature/Ticket/models/Ticket';
import { TicketRepositorio } from 'app/core/api/tickets.repositorio';


export function listarTickets(
    tickets: Array<Ticket>
): TiposAccionesTicket {
    return {
        type: LISTAR_TICKETS,
        payload: tickets
    };
}


export function agregarNuevoTicket(
    ticket: Ticket
): TiposAccionesTicket {
    return {
        type: AGREGAR_TICKET,
        payload: ticket
    };
}

export function getIdTicket(
    ticket: Ticket
): TiposAccionesTicket {
    return {
        type: GETID_TICKET,
        payload: ticket
    };
}


export function eliminarTicket(
    ticket: Ticket
): TiposAccionesTicket {
    return {
        type: ELIMINAR_TICKET,
        payload: ticket
    };
}

export function actualizarTicket(
    ticket: Ticket
): TiposAccionesTicket {
    return {
        type: ACTUALIZAR_TICKET,
        payload: ticket
    };
}


export function listarTicketsAsync() {
    return function (dispacth: any) {
        TicketRepositorio.consultarTickets()
            .then((respuesta: any) =>
                dispacth(
                    listarTickets(respuesta.data)
                )
            );
    };
}


export function agregarTicketAsync(ticket: Ticket) {
    return function () {
        TicketRepositorio.AgregarTicket(
            ticket
        );
    };
}


export function guardarTicket(
    ticket: Ticket
): TiposAccionesTicket {
    return {
        type: GUARDAR_TICKET,
        payload: ticket
    };
}


export function actualizarTicketsAsync(idTicket: number, ticket: Ticket) {
    return function () {
        TicketRepositorio.actualizarTicket(
            idTicket, ticket
        );
    };
}