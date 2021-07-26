import {
    actualizarCanchaAsync,
    agregarCanchaAsync,
    eliminarCanchas,
    listarCanchaAsync,
    guardarCancha
} from 'app/core/redux/acciones/cancha/CanchasAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionCancha } from '../containers/GestionCancha';

import { connect } from 'react-redux';


const mapStateToProps = (state: EstadoGeneral) => {
    return state.cancha;
};


export const ProveedorGestionCancha = connect(mapStateToProps, {
    agregarNuevaCancha: agregarCanchaAsync,
    eliminarCanchas,
    listarCanchas: listarCanchaAsync,
    actualizarCancha: actualizarCanchaAsync,
    guardarCancha,
})(GestionCancha);