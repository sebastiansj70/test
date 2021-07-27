import { EstadoProducto } from './EstadoProducto';
import { StatusPlayinField } from './StatusPlayingField';
import { StatusReservation } from './StatusReservation';

export interface StatusGeneral {
  productos: EstadoProducto;
  reservation: StatusReservation;
  playingField: StatusPlayinField;
}
