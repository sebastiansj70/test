import * as PropTypes from 'prop-types';
import * as React from 'react';

// import { ListaTickets } from '../../components/ListarTickets';
import { ListaCancha } from '../../components/ListarCanchas';
import { FormCrearCancha } from '../../components/FormCrearCancha';

// import { Ticket } from '../../models/Ticket';
import { Cancha } from '../../models/Cancha';
import { useEffect, useState } from 'react';
import { Paper, Tabs, AppBar, Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import { ContentAppBar } from './styles'
import './styles.css'



interface GestionCanchaProps {
    cancha: Array<Cancha>;
    agregarNuevaCancha: (cancha: Cancha) => void;
    // eliminarTicket: (ticket: Ticket) => void;
    listarCanchas: () => void;
    // actualizarTicket: (ticket: Ticket) => void;
}


export const GestionCancha: React.FC<GestionCanchaProps> = ({
    cancha,
    agregarNuevaCancha,
    // eliminarTicket,
    listarCanchas,
    // actualizarTicket
}) => {

    const [value, setValue] = useState('2');

    useEffect(() => {
        listarCanchas();
    }, [listarCanchas]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <ContentAppBar>
            <TabContext value={value} >
                <AppBar position='relative' className='appbar'>
                    <TabList className='tablis' onChange={handleChange} aria-label="simple tabs example">
                        <Tab className='tab' label="Nueva" value="2" />
                        <Tab className='tab' label="Canchas" value="1" />
                    </TabList>
                </AppBar >
                <TabPanel value='1'>
                    <ListaCancha
                        cancha={cancha}
                    />
                </TabPanel>
                <TabPanel value='2'>
                    <FormCrearCancha
                        onSubmit={agregarNuevaCancha}
                        formTitle='Crear Cancha'
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
}


GestionCancha.propTypes = {
    cancha: PropTypes.array.isRequired,
    agregarNuevaCancha: PropTypes.func.isRequired,
    // eliminarTicket: PropTypes.func.isRequired,
    listarCanchas: PropTypes.func.isRequired,
    // actualizarTicket: PropTypes.func.isRequired,
}