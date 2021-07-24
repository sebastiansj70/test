import { EstadoCancha } from './EstadoCancha';
import { EstadoProducto } from './EstadoProducto';
import { EstadoTicket } from './EstadoTicket';

export interface EstadoGeneral {
  productos: EstadoProducto;
  ticket: EstadoTicket;
  cancha: EstadoCancha;
}
