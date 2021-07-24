import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionTicket } from '../hoc/ProveedorGestionTicket';
import { RouteComponentProps } from 'react-router-dom';


const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="Tickets" description="Administracion Tickets">
            <ProveedorGestionTicket />
        </Layout>
    );
};

MainPage.displayName = 'TicketMainPage';

export default MainPage;



