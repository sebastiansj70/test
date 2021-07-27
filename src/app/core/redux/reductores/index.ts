import cancha from './cancha/canchaReductor';
import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import reservation from './reservation/reservationReductor';

export default combineReducers({ productos, reservation, cancha });
