import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { UpdateReservation } from '../UpdateReservation';
import { CardTicket } from '../Card';
import { DivContent } from './styles';
import Modal from '@material-ui/core/Modal';
import { Reservation } from '../../models/Reservation';
import { Tittle } from 'app/shared/components/Tittle';


export interface ReservationListProps {
    reservationLists: Array<Reservation>;
    reservation: Reservation,
    saveReservation: (reservation: Reservation) => void;
    updateReservation: (idReservation: number, reservation: Reservation) => void;
}

export const ReservationList: React.FC<ReservationListProps> = ({
    reservationLists,
    reservation,
    saveReservation,
    updateReservation,
}) => {

    useEffect(() => {
    }, [updateReservation]);

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = (reservation: Reservation) => {
        saveReservation(reservation);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <DivContent>
            <Tittle
                msg='Lista de reservaciones'
            />
            {
                reservationLists.map((reservation: Reservation) => {
                    return (
                        <div
                            id={'reservationsList'}
                            key={Math.random()}
                            onClick={() => handleOpenModal(reservation)}
                        >
                            <CardTicket
                                telefonoUsuario={reservation.telefonoUsuario}
                                nombreUsuario={reservation.nombreUsuario}
                                horaIngreso={reservation.horaIngreso}
                                horaSalida={reservation.horaSalida}
                                idCancha={reservation.idCancha}
                                valor={reservation.valor}
                            />
                        </div>
                    );
                })
            }

            <div>

                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                >
                    <div style={{ background: '#FFF', width: '80vmin', padding: '4vmin', borderRadius: '2vmin' }}>
                        <UpdateReservation
                            reservation={reservation}
                            formTitle='Actualizar reservacion'
                            onSubmit={updateReservation}
                            handleShow={handleCloseModal}
                        />
                    </div>
                </Modal>
            </div>

        </DivContent >
    );
};

ReservationList.propTypes = {
    reservationLists: PropTypes.array.isRequired,
    saveReservation: PropTypes.func.isRequired,
    reservation: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired,
    updateReservation: PropTypes.func.isRequired
};
