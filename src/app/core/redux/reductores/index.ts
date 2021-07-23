import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import ticket from './ticket/ticketReductor';
import cancha from './cancha/canchaReductor';

export default combineReducers({ productos, ticket, cancha });
