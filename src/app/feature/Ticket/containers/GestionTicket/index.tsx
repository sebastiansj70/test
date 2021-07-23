import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ListaTickets } from '../../components/ListarTickets';
import { FormCrearTicket } from '../../components/FromCrearTicket';
import { Ticket } from '../../models/Ticket';
import { useEffect, useState } from 'react';
import { Paper, Tabs, AppBar, Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import { ContentAppBar } from './styles'
import './styles.css'

interface GestionTicketProps {
    ticket: Array<Ticket>;
    ticketNew: Ticket;
    agregarNuevoTicket: (ticket: Ticket) => void;
    listarTickets: () => void;
    guardarTicket: (ticket: Ticket) => void;
    actualizarTicket: (idTicket: number, ticket: Ticket) => void
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
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
}


GestionTicket.propTypes = {
    ticket: PropTypes.array.isRequired,
    agregarNuevoTicket: PropTypes.func.isRequired,
    listarTickets: PropTypes.func.isRequired,
}