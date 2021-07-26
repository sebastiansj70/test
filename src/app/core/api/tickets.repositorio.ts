import { Ticket } from '../../feature/Ticket/models/Ticket';
import { axiosIntance } from '../config/AxiosConfig';

export const TicketRepositorio = {
    consultarTickets: () =>
        axiosIntance.get('/ticket/listar'),


    AgregarTicket: async (ticket: Ticket) => {

        await axiosIntance.post('/ticket',
            JSON.stringify(ticket)
            , {}).then((response) => {
            }, (error) => {
            });
    },

    actualizarTicket: async (idTicket: number, ticket: Ticket) => {
        await axiosIntance.put(`/ticket/actualizar/${idTicket}`,
            JSON.stringify(ticket)
            , {}).then((response) => {
            }, (error) => {
            });
    }
};