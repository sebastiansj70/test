import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivData, DivHeader, H3Lineal, ImgTicket, LinearTicket, TicketCard } from './styles';
import LogoBall from 'assets/img/logo-ball.png';

interface CardTicketProps {
    telefonoUsuario: number;
    nombreUsuario: string;
    horaIngreso: number;
    horaSalida: number;
    idCancha: number;
    valor: number;
}

export const CardTicket: React.FC<CardTicketProps> = (({
    telefonoUsuario,
    nombreUsuario,
    horaIngreso,
    horaSalida,
    idCancha,
    valor,
}) => {
    return (
        <TicketCard>
            <DivHeader >
                <ImgTicket
                    src={LogoBall}
                />
                <h1>San Juan</h1>
            </DivHeader>

            <DivData >
                <h3>{'Teléfono:  '}</h3>
                <H3Lineal>{telefonoUsuario}</H3Lineal>
            </DivData>
            <DivData>
                <h3>{'Nombre : '}</h3>
                <H3Lineal>{nombreUsuario}</H3Lineal>
            </DivData>
            <DivData>
                <h3>{'Ingreso : '}</h3>
                <H3Lineal>{horaIngreso}</H3Lineal>
            </DivData>
            <DivData>
                <h3>{'Salida :'}</h3>
                <H3Lineal>{horaSalida}</H3Lineal>
            </DivData>
            <DivData>
                <h3>{'Cancha : '}</h3>
                <H3Lineal>{idCancha}</H3Lineal>
            </DivData>
            <LinearTicket>
                --------------------------------------------------------
            </LinearTicket>
            <DivData>
                <h3>{'valor : '}</h3>
                <H3Lineal>{valor}</H3Lineal>
            </DivData>
        </TicketCard>
    );
});

CardTicket.propTypes = {
    telefonoUsuario: PropTypes.number.isRequired,
    nombreUsuario: PropTypes.string.isRequired,
    horaIngreso: PropTypes.number.isRequired,
    horaSalida: PropTypes.number.isRequired,
    idCancha: PropTypes.number.isRequired,
    valor: PropTypes.number.isRequired,
};
