import { EstadoProducto } from './EstadoProducto';
import { EstadoTicket } from './EstadoTicket';
import { EstadoCancha } from './EstadoCancha';

export interface EstadoGeneral {
  productos: EstadoProducto;
  ticket: EstadoTicket;
  cancha: EstadoCancha;
}
