import { EstadoCancha } from './EstadoCancha';
import { EstadoProducto } from './EstadoProducto';
import { StatusReservation } from './StatusReservation';

export interface EstadoGeneral {
  productos: EstadoProducto;
  reservation: StatusReservation;
  cancha: EstadoCancha;
}
