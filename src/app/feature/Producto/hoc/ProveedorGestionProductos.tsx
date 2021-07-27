import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { StatusGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionProductos } from '../containers/GestionProductos';
import { connect } from 'react-redux';

const mapStateToProps = (state: StatusGeneral) => {
  return state.productos;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
})(GestionProductos);
