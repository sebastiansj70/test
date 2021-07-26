import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Ticket } from '../../models/Ticket';

interface BtnEliminarTicketProps {
    onEliminar: (ticket: Ticket) => any;
    ticket: Ticket;
}

export const BtnEliminarTicket: React.FC<BtnEliminarTicketProps> = ({
    onEliminar,
    ticket,
}) => {
    const handleEliminar = () => onEliminar(ticket);
    return (
        <Button onClick={handleEliminar}>
            <span role="img" aria-labelledby="trash">
                🗑️
            </span>
        </Button>
    );
};

BtnEliminarTicket.propTypes = {
    ticket: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired,
    onEliminar: PropTypes.func.isRequired,
};
