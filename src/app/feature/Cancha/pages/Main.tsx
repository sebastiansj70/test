import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionCancha } from '../hoc/ProveedorGestionCancha';
import { RouteComponentProps } from 'react-router-dom';


const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="Canchas" description="Administracion Cancha">
            <ProveedorGestionCancha />
        </Layout>
    );
};

MainPage.displayName = 'CanchaMainPage';

export default MainPage;



