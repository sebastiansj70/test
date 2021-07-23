import { axiosIntance } from '../config/AxiosConfig';
import { Ticket } from '../../feature/Ticket/models/Ticket'

export const TicketRepositorio = {
    consultarTickets: () =>
        axiosIntance.get(`/ticket/listar`),


    AgregarTicket: (ticket: Ticket) => {

        axiosIntance.post(`/ticket`,
            JSON.stringify(ticket)
            , {}).then((response) => {
                console.log(response)
            }, (error) => {
                console.log(error)
            })
    },

    actualizarTicket: (idTicket: number, ticket: Ticket) => {
        console.log(idTicket, 'IDDDDDD', ticket, 'ticketttttttt')
        axiosIntance.put(`/ticket/actualizar/${idTicket}`,
            JSON.stringify(ticket)
            , {}).then((response) => {
                console.log(response)
            }, (error) => {
                console.log(error)
            })
    }
}