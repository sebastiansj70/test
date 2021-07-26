import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { ActualizarTicket } from '../ActualizarTicket';
import { CardTicket } from '../Card';
import { DivContent } from './styles';
import Modal from '@material-ui/core/Modal';
import { Ticket } from '../../models/Ticket';
import { Tittle } from 'app/shared/components/Tittle';


export interface ListaTicketsProps {
    tickets: Array<Ticket>;
    ticketNew: Ticket,
    guardarTicket: (ticket: Ticket) => void;
    actualizarTicket: (idTicket: number, ticket: Ticket) => void;
}

export const ListaTickets: React.FC<ListaTicketsProps> = ({
    tickets,
    ticketNew,
    guardarTicket,
    actualizarTicket,
}) => {

    useEffect(() => {
    }, [actualizarTicket]);


    const [open, setOpen] = React.useState(false);

    const handleOpen = (ticket: Ticket) => {
        guardarTicket(ticket);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DivContent>
            <Tittle
                msg='Lista de tickets'
            />
            {
                tickets.map((ticket: Ticket) => {
                    return (
                        <div
                            id={'ticketsList'}
                            key={Math.random()}
                            onClick={() => handleOpen(ticket)}
                        >
                            <CardTicket
                                telefonoUsuario={ticket.telefonoUsuario}
                                nombreUsuario={ticket.nombreUsuario}
                                horaIngreso={ticket.horaIngreso}
                                horaSalida={ticket.horaSalida}
                                idCancha={ticket.idCancha}
                                valor={ticket.valor}
                            />
                        </div>
                    );
                })
            }

            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                >
                    <div style={{ background: '#FFF', width: '80vmin', padding: '4vmin', borderRadius: '2vmin' }}>
                        <ActualizarTicket
                            ticket={ticketNew}
                            formTitle='Actualizar Ticket'
                            onSubmit={actualizarTicket}
                            handleShow={handleClose}
                        />
                    </div>
                </Modal>
            </div>

        </DivContent >
    );
};

ListaTickets.propTypes = {
    tickets: PropTypes.array.isRequired,
    guardarTicket: PropTypes.func.isRequired,
    ticketNew: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired,
    actualizarTicket: PropTypes.func.isRequired
}