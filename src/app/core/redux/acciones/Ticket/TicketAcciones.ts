import {
    RESERVATION_LIST,
    ADD_RESERVATION,
    DELETE_RESERVATION,
    UPDATE_RESERVATION,
    SAVE_RESERVATION,
    GET_RESERVATION,
    ReservationActionTypes
} from './ReservationActionTypes';
import { Reservation } from 'app/feature/Reservation/models/Reservation';
import { ReservationRepository } from 'app/core/api/reservation.repository';


export function reservationList(
    reservationList: Array<Reservation>
): ReservationActionTypes {
    return {
        type: RESERVATION_LIST,
        payload: reservationList
    };
}


export function addNewReservation(
    reservation: Reservation
): ReservationActionTypes {
    return {
        type: ADD_RESERVATION,
        payload: reservation
    };
}

export function getReservation(
    reservation: Reservation
): ReservationActionTypes {
    return {
        type: GET_RESERVATION,
        payload: reservation
    };
}


export function deleteReservation(
    reservation: Reservation
): ReservationActionTypes {
    return {
        type: DELETE_RESERVATION,
        payload: reservation
    };
}

export function updateReservation(
    reservation: Reservation
): ReservationActionTypes {
    return {
        type: UPDATE_RESERVATION,
        payload: reservation
    };
}


export function reservationListAsync() {
    return function (dispacth: any) {
        ReservationRepository.consultReservations()
            .then((respuesta: any) =>
                dispacth(
                    reservationList(respuesta.data)
                )
            );
    };
}


export function addReservationAsync(reservation: Reservation) {
    return function () {
        ReservationRepository.addReservation(
            reservation
        );
    };
}


export function saveReservation(
    reservation: Reservation
): ReservationActionTypes {
    return {
        type: SAVE_RESERVATION,
        payload: reservation
    };
}


export function updateReservationsAsync(idReservation: number, reservation: Reservation) {
    return function () {
        ReservationRepository.updateReservation(
            idReservation, reservation
        );
    };
}