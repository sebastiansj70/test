import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { GestionProductos } from '../containers/GestionProductos';
import { StatusGeneral } from 'app/core/redux/modelo/StatusGeneral';
import { connect } from 'react-redux';

const mapStateToProps = (state: StatusGeneral) => {
  return state.productos;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
})(GestionProductos);
