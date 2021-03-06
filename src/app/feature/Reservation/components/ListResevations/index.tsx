import React, { useEffect } from 'react';
import { CardTicket } from '../Card';
import { DivContent } from './styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { Reservation } from '../../models/Reservation';
import { Tittle } from 'app/shared/components/Tittle';
import { UpdateReservation } from '../UpdateReservation';

export interface ReservationListProps {
  reservationLists: Array<Reservation>;
  reservation: Reservation;
  saveReservation: (reservation: Reservation) => void;
  updateReservation: (idReservation: number, reservation: Reservation) => void;
}

export const ReservationList: React.FC<ReservationListProps> = ({
  reservationLists,
  reservation,
  saveReservation,
  updateReservation,
}) => {
  useEffect(() => {}, [updateReservation]);

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = (reservations: Reservation) => {
    saveReservation(reservations);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <DivContent>
      <Tittle msg="Lista de reservaciones" />
      {reservationLists.map((areservation: Reservation) => {
        return (
          <div
            id={'reservationsList'}
            key={Math.random()}
            onClick={() => handleOpenModal(areservation)}
          >
            <CardTicket
              telefonoUsuario={areservation.telefonoUsuario}
              nombreUsuario={areservation.nombreUsuario}
              horaIngreso={areservation.horaIngreso}
              horaSalida={areservation.horaSalida}
              idCancha={areservation.idCancha}
              valor={areservation.valor}
            />
          </div>
        );
      })}

      <div>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              background: '#FFF',
              width: '80vmin',
              padding: '4vmin',
              borderRadius: '2vmin',
            }}
          >
            <UpdateReservation
              reservation={reservation}
              formTitle="Actualizar reservacion"
              onSubmit={updateReservation}
              handleShow={handleCloseModal}
            />
          </div>
        </Modal>
      </div>
    </DivContent>
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
  updateReservation: PropTypes.func.isRequired,
};
