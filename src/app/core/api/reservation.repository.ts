import { Reservation } from '../../feature/Reservation/models/Reservation';
import { axiosIntance } from '../config/AxiosConfig';

export const ReservationRepository = {
    consultReservations: () =>
        axiosIntance.get('/ticket/listar'),


    addReservation: async (reservation: Reservation) => {

        await axiosIntance.post('/ticket',
            JSON.stringify(reservation)
            , {}).then((response) => {
            }, (error) => {
            });
    },

    updateReservation: async (idReservation: number, reservation: Reservation) => {
        await axiosIntance.put(`/ticket/actualizar/${idReservation}`,
            JSON.stringify(reservation)
            , {}).then((response) => {
            }, (error) => {
            });
    }
};
