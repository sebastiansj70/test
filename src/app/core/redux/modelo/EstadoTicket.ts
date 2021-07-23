import { Ticket } from 'app/feature/Ticket/models/Ticket';

export interface EstadoTicket {
    ticket: Ticket[];
    ticketNew: Ticket;
    idTicket: number;
}