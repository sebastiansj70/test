import { Ticket } from 'app/feature/Reserva/models/Ticket';

export interface EstadoTicket {
    ticket: Ticket[];
    ticketNew: Ticket;
    idTicket: number;
}