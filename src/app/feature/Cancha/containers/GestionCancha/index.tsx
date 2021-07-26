import './styles.css';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AppBar, Tab } from '@material-ui/core';
import { Cancha } from '../../models/Cancha';
import { ContentAppBar } from './styles';
import { FormCrearCancha } from '../../components/FormCrearCancha';
import { ListaCancha } from '../../components/ListarCanchas';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useEffect, useState } from 'react';

interface GestionCanchaProps {
    cancha: Array<Cancha>;
    canchaNew: Cancha;
    agregarNuevaCancha: (cancha: Cancha) => void;
    listarCanchas: () => void;
    actualizarCancha: (idCancha: number, cancha: Cancha) => void;
    guardarCancha: (cancha: Cancha) => void;
}

export const GestionCancha: React.FC<GestionCanchaProps> = ({
    cancha,
    canchaNew,
    agregarNuevaCancha,
    listarCanchas,
    actualizarCancha,
    guardarCancha
}) => {

    const [value, setValue] = useState('2');

    useEffect(() => {
        listarCanchas();
    }, [listarCanchas]);

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
                        <Tab className='tab' label="Nueva" value="2" />
                        <Tab className='tab' label="Canchas" value="1" />
                    </TabList>
                </AppBar >
                <TabPanel value='1'>
                    <ListaCancha
                        canchaNew={canchaNew}
                        cancha={cancha}
                        actualizarCancha={actualizarCancha}
                        guardarCancha={guardarCancha}
                    />
                </TabPanel>
                <TabPanel value='2'>
                    <FormCrearCancha
                        onSubmit={agregarNuevaCancha}
                        formTitle='Crear Cancha'
                        handleListTicket={handleListTicket}
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
};

GestionCancha.propTypes = {
    cancha: PropTypes.array.isRequired,
    agregarNuevaCancha: PropTypes.func.isRequired,
    listarCanchas: PropTypes.func.isRequired,
    actualizarCancha: PropTypes.func.isRequired,
    guardarCancha: PropTypes.func.isRequired,
    canchaNew: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }).isRequired
};
