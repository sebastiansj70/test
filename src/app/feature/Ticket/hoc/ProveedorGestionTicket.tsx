import {
    agregarTicketAsync,
    eliminarTicket,
    listarTicketsAsync,
    actualizarTicketsAsync,
    guardarTicket
} from 'app/core/redux/acciones/Ticket/TicketAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionTicket } from '../containers/GestionTicket';

import { connect } from 'react-redux';


const mapStateToProps = (state: EstadoGeneral) => {
    return state.ticket;
};


export const ProveedorGestionTicket = connect(mapStateToProps, {
    agregarNuevoTicket: agregarTicketAsync,
    listarTickets: listarTicketsAsync,
    guardarTicket,
    actualizarTicket: actualizarTicketsAsync,
})(GestionTicket);