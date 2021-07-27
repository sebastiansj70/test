import {
    updateReservationsAsync,
    addReservationAsync,
    saveReservation,
    reservationListAsync
} from 'app/core/redux/acciones/Reservation/ReservationActions';
import { StatusGeneral } from 'app/core/redux/modelo/StatusGeneral';
import { ReservationManagment } from '../containers/ReservationManagement';

import { connect } from 'react-redux';


const mapStateToProps = (state: StatusGeneral) => {
    return state.reservation;
};


export const ReservationManagmentProvider = connect(mapStateToProps, {
    addReservation: addReservationAsync,
    reservationList: reservationListAsync,
    saveReservation,
    updateReservations: updateReservationsAsync,
})(ReservationManagment);