import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { PlayingFieldManagmentProvaider } from '../hoc/PlayingFieldManagmentProvaider';
import { RouteComponentProps } from 'react-router-dom';


const MainPage: React.FC<RouteComponentProps> = () => {
    return (
        <Layout title="playingField" description="managment playing field">
            <PlayingFieldManagmentProvaider />
        </Layout>
    );
};

MainPage.displayName = 'CanchaMainPage';

export default MainPage;



