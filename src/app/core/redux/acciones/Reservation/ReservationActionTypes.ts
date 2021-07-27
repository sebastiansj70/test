import { Reservation } from 'app/feature/Reservation/models/Reservation';


export const RESERVATION_LIST = 'RESERVATION_LIST';
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const UPDATE_RESERVATION = 'UPDATE_RESERVATION';
export const SAVE_RESERVATION = 'SAVE_RESERVATION';
export const GET_RESERVATION = 'GET_RESERVATION';


interface AcctionReservationList {
    type: typeof RESERVATION_LIST;
    payload: Reservation[];
}

interface AcctionAddReservation {
    type: typeof ADD_RESERVATION;
    payload: Reservation;
}

interface AcctionDeleteReservation {
    type: typeof DELETE_RESERVATION;
    payload: Reservation;
}

interface AcctionUpdateReservation {
    type: typeof UPDATE_RESERVATION;
    payload: Reservation;
}


interface AcctionSaveReservation {
    type: typeof SAVE_RESERVATION;
    payload: Reservation;
}


interface AcctionGetReservation {
    type: typeof GET_RESERVATION;
    payload: Reservation;
}

export type ReservationActionTypes =
    | AcctionReservationList
    | AcctionAddReservation
    | AcctionDeleteReservation
    | AcctionUpdateReservation
    | AcctionSaveReservation
    | AcctionGetReservation;