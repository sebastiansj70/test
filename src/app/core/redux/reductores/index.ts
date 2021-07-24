import cancha from './cancha/canchaReductor';
import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import ticket from './ticket/ticketReductor';

export default combineReducers({ productos, ticket, cancha });
