import {
    addReservationAsync,
    reservationListAsync,
    saveReservation,
    updateReservationsAsync
} from 'app/core/redux/acciones/Reservation/ReservationActions';
import { ReservationManagment } from '../containers/ReservationManagement';
import { StatusGeneral } from 'app/core/redux/modelo/StatusGeneral';

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