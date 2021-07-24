import {
    actualizarTicket,
    agregarCanchaAsync,
    eliminarCanchas,
    listarCanchaAsync
} from 'app/core/redux/acciones/cancha/CanchasAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
// import { GestionTicket } from '../containers/GestionTicket';
import { GestionCancha } from '../containers/GestionCancha';

import { connect } from 'react-redux';


const mapStateToProps = (state: EstadoGeneral) => {
    return state.cancha;
};


export const ProveedorGestionCancha = connect(mapStateToProps, {
    agregarNuevaCancha: agregarCanchaAsync,
    eliminarCanchas,
    listarCanchas: listarCanchaAsync,
    actualizarTicket,
})(GestionCancha);