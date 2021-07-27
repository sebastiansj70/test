import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ReservationManagmentProvider } from '../hoc/ReservationManagmentProvider';
import { RouteComponentProps } from 'react-router-dom';


const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="Reservation" description="Reservations managment">
            <ReservationManagmentProvider />
        </Layout>
    );
};

MainPage.displayName = 'ReservationMainPage';

export default MainPage;



