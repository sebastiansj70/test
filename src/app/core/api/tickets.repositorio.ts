import { Ticket } from '../../feature/Ticket/models/Ticket';
import { axiosIntance } from '../config/AxiosConfig';

export const TicketRepositorio = {
    consultarTickets: () =>
        axiosIntance.get('/ticket/listar'),


    AgregarTicket: (ticket: Ticket) => {

        axiosIntance.post('/ticket',
            JSON.stringify(ticket)
            , {}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    },

    actualizarTicket: (idTicket: number, ticket: Ticket) => {
        axiosIntance.put(`/ticket/actualizar/${idTicket}`,
            JSON.stringify(ticket)
            , {}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
};