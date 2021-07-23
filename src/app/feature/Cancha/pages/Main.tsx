import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';
// import { ProveedorGestionTicket } from '../hoc/ProveedorGestionTicket';
import { ProveedorGestionCancha } from '../hoc/ProveedorGestionCancha';


const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="Canchas" description="Administracion Cancha">
            <ProveedorGestionCancha />
        </Layout>
    );
}

MainPage.displayName = 'CanchaMainPage';

export default MainPage;



