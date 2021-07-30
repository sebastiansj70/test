import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CanchaCard } from './styles';

interface CardCanchaProps {
    idCancha: number;
    statusCancha: string;
}

export const CardCancha: React.FC<CardCanchaProps> = (({
    idCancha,
    statusCancha,
}) => {
    return (
        <CanchaCard>
            <h3>{`Número de Cancha : ${idCancha}`}</h3>
            <h3>{`Estado de Cancha : ${statusCancha}`}</h3>
        </CanchaCard>
    );
});

CardCancha.propTypes = {
    idCancha: PropTypes.number.isRequired,
    statusCancha: PropTypes.string.isRequired,
};
