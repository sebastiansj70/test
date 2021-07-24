import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Cancha } from '../../models/Cancha';
import { CardCancha } from '../Card';
import { ContentCard } from './styles';
import { Tittle } from '../../../../shared/components/Tittle';


export interface ListaCanchaProps {
    cancha: Array<Cancha>;
}

export const ListaCancha: React.FC<ListaCanchaProps> = ({
    cancha,
}) => {
    return (
        <ContentCard>
            <Tittle
                msg='Lista de canchas'
            />
            {
                cancha.map((cancha: Cancha) => {
                    return (
                        <CardCancha
                            key={Math.random()}
                            idCancha={cancha.idCancha}
                            statusCancha={cancha.statusCancha}
                        />
                    );
                })
            }
        </ContentCard>
    );
};

ListaCancha.propTypes = {
    cancha: PropTypes.array.isRequired,
};
