import './styles.css';
import * as PropTypes from 'prop-types';
import { AppBar, Tab } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { ContentAppBar } from './styles';
import { CreateReservationForm } from '../../components/CreateReservationForm';
import { Reservation } from '../../models/Reservation';
import { ReservationList } from '../../components/ListResevations';

interface ReservationManagmentProps {
    reservationLists: Array<Reservation>;
    reservation: Reservation;
    addReservation: (reservation: Reservation) => void;
    reservationList: () => void;
    saveReservation: (reservation: Reservation) => void;
    updateReservations: (idReservation: number, reservation: Reservation) => void;
}


export const reservationManagment: React.FC<ReservationManagmentProps> = ({
    reservationLists,
    reservation,
    addReservation,
    reservationList,
    saveReservation,
    updateReservations,
}) => {

    const [tabReservation, setTabReservation] = useState('2');

    useEffect(() => {
        reservationList();
    }, [reservationList]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTabReservation(newValue);
    };

    const handleListReservation = () => {
        setTabReservation('1');
    };

    return (
        <ContentAppBar>
            <TabContext value={tabReservation} >
                <AppBar position='relative' className='appbar'>
                    <TabList className='tablis' onChange={handleChange} aria-label="simple tabs example">
                        <Tab className='tab' label="Nueva" value="2" />
                        <Tab className='tab' label="Reservaciones" value="1" />
                    </TabList>
                </AppBar >
                <TabPanel value='1'>
                    <ReservationList
                        reservationLists={reservationLists}
                        reservation={reservation}
                        saveReservation={saveReservation}
                        updateReservation={updateReservations}
                    />
                </TabPanel>
                <TabPanel value='2'>
                    <CreateReservationForm
                        onSubmit={addReservation}
                        formTitle='Crear Reservacion'
                        handleReservationList={handleListReservation}
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
};


reservationManagment.propTypes = {
    reservationLists: PropTypes.array.isRequired,
    addReservation: PropTypes.func.isRequired,
    reservationList: PropTypes.func.isRequired,
    updateReservations: PropTypes.func.isRequired,
    saveReservation: PropTypes.func.isRequired,
    reservation: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired
};
