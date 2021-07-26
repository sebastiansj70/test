import './styles.css';
import * as PropTypes from 'prop-types';
import { AppBar, Tab } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TabList, TabPanel, TabContext } from '@material-ui/lab';
import { ContentAppBar } from './styles';
import { FormCrearTicket } from '../../components/FromCrearTicket';
import { ListaTickets } from '../../components/ListarTickets';
import { Ticket } from '../../models/Ticket';

interface GestionTicketProps {
    ticket: Array<Ticket>;
    ticketNew: Ticket;
    agregarNuevoTicket: (ticket: Ticket) => void;
    listarTickets: () => void;
    guardarTicket: (ticket: Ticket) => void;
    actualizarTicket: (idTicket: number, ticket: Ticket) => void;
}


export const GestionTicket: React.FC<GestionTicketProps> = ({
    ticket,
    ticketNew,
    agregarNuevoTicket,
    listarTickets,
    guardarTicket,
    actualizarTicket,
}) => {

    const [value, setValue] = useState('2');

    useEffect(() => {
        listarTickets();
    }, [listarTickets]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    const handleListTicket = () => {
        setValue('1');
    };

    return (
        <ContentAppBar>
            <TabContext value={value} >
                <AppBar position='relative' className='appbar'>
                    <TabList className='tablis' onChange={handleChange} aria-label="simple tabs example">
                        <Tab className='tab' label="Nuevo" value="2" />
                        <Tab className='tab' label="Tickets" value="1" />
                    </TabList>
                </AppBar >
                <TabPanel value='1'>
                    <ListaTickets
                        tickets={ticket}
                        ticketNew={ticketNew}
                        guardarTicket={guardarTicket}
                        actualizarTicket={actualizarTicket}
                    />
                </TabPanel>
                <TabPanel value='2'>
                    <FormCrearTicket
                        onSubmit={agregarNuevoTicket}
                        formTitle='Crear Ticket'
                        handleListTicket={handleListTicket}
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
};


GestionTicket.propTypes = {
    ticket: PropTypes.array.isRequired,
    agregarNuevoTicket: PropTypes.func.isRequired,
    listarTickets: PropTypes.func.isRequired,
    actualizarTicket: PropTypes.func.isRequired,
    guardarTicket: PropTypes.func.isRequired,
    ticketNew: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired
};
