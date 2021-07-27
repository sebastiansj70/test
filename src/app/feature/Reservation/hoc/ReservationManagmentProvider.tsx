import {
    updateReservationsAsync,
    addReservationAsync,
    saveReservation,
    reservationListAsync
} from 'app/core/redux/acciones/Ticket/TicketAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { ReservationManagment } from '../containers/ReservationManagement';

import { connect } from 'react-redux';


const mapStateToProps = (state: EstadoGeneral) => {
    return state.reservation;
};


export const ReservationManagmentProvider = connect(mapStateToProps, {
    addReservation: addReservationAsync,
    reservationList: reservationListAsync,
    saveReservation,
    updateReservations: updateReservationsAsync,
})(ReservationManagment);