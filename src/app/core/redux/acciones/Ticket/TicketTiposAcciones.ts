import { Ticket } from 'app/feature/Ticket/models/Ticket';


export const LISTAR_TICKETS = 'LISTAR_TICKETS';
export const AGREGAR_TICKET = 'AGREGAR_TICKET';
export const ELIMINAR_TICKET = 'ELIMINAR_TICKET';
export const ACTUALIZAR_TICKET = 'ACTULAIZAR_TICKET';
export const GUARDAR_TICKET = 'GUARDAR_TICKET';
export const GETID_TICKET = 'GETID_TICKET';


interface AcctionListarTickets {
    type: typeof LISTAR_TICKETS;
    payload: Ticket[];
}

interface AcctionAgregarTicket {
    type: typeof AGREGAR_TICKET;
    payload: Ticket;
}

interface AcctionEliminarTicket {
    type: typeof ELIMINAR_TICKET;
    payload: Ticket;
}

interface AcctionActualizarTicket {
    type: typeof ACTUALIZAR_TICKET;
    payload: Ticket;
}


interface AcctionGuardarTicket {
    type: typeof GUARDAR_TICKET;
    payload: Ticket;
}


interface AcctionGetIdTicket {
    type: typeof GETID_TICKET;
    payload: Ticket;
}

export type TiposAccionesTicket =
    | AcctionListarTickets
    | AcctionAgregarTicket
    | AcctionEliminarTicket
    | AcctionActualizarTicket
    | AcctionGuardarTicket
    | AcctionGetIdTicket;