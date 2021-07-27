import { combineReducers } from 'redux';
import playingField from './playingField/playingFieldReductor';
import productos from './productos/productosReductor';
import reservation from './reservation/reservationReductor';

export default combineReducers({ productos, reservation, playingField });
