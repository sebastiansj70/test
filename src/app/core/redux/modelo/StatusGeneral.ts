import { StatusPlayinField } from './StatusPlayingField';
import { EstadoProducto } from './EstadoProducto';
import { StatusReservation } from './StatusReservation';

export interface StatusGeneral {
  productos: EstadoProducto;
  reservation: StatusReservation;
  playingField: StatusPlayinField;
}
