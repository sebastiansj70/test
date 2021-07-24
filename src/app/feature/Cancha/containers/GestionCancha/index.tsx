import './styles.css';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AppBar, Tab } from '@material-ui/core';
import { Cancha } from '../../models/Cancha';
import { ContentAppBar } from './styles';
import { FormCrearCancha } from '../../components/FormCrearCancha';
import { ListaCancha } from '../../components/ListarCanchas';
import { TabContext } from '@material-ui/lab';
import { TabList } from '@material-ui/lab';
import { TabPanel } from '@material-ui/lab';
import { useEffect } from 'react';
import { useState } from 'react';



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
};


GestionCancha.propTypes = {
    cancha: PropTypes.array.isRequired,
    agregarNuevaCancha: PropTypes.func.isRequired,
    // eliminarTicket: PropTypes.func.isRequired,
    listarCanchas: PropTypes.func.isRequired,
    // actualizarTicket: PropTypes.func.isRequired,
};