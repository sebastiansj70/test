import { Reservation } from 'app/feature/Reservation/models/Reservation';

export interface StatusReservation {
    reservationLists: Reservation[];
    reservation: Reservation;
    idTicket: number;
}
