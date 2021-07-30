import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Reservation } from '../../models/Reservation';

interface ButtonDeleteReservationProps {
  DeleteReservation: (ticket: Reservation) => void;
  ticket: Reservation;
}

export const ButtonDeleteReservation: React.FC<ButtonDeleteReservationProps> =
  ({ DeleteReservation, ticket }) => {
    const handleDeleteReservation = () => DeleteReservation(ticket);
    return (
      <Button onClick={handleDeleteReservation}>
        <span role="img" aria-labelledby="trash">
          🗑️
        </span>
      </Button>
    );
  };

ButtonDeleteReservation.propTypes = {
  ticket: PropTypes.shape({
    idTicket: PropTypes.number.isRequired,
    telefonoUsuario: PropTypes.number.isRequired,
    nombreUsuario: PropTypes.string.isRequired,
    horaIngreso: PropTypes.number.isRequired,
    horaSalida: PropTypes.number.isRequired,
    idCancha: PropTypes.number.isRequired,
    valor: PropTypes.number.isRequired,
  }).isRequired,
  DeleteReservation: PropTypes.func.isRequired,
};
