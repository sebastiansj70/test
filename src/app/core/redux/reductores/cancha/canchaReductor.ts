import {
    AGREGAR_CANCHAS,
    LISTAR_CANCHAS,
    TiposAccionesCanchas,
} from '../../acciones/cancha/CanchasTiposAcciones';
import { Cancha } from 'app/feature/Cancha/models/Cancha';
import { EstadoCancha } from '../../modelo/EstadoCancha';

const initialState: EstadoCancha = {
    cancha: Array<Cancha>()
};

export default function (
    state = initialState,
    action: TiposAccionesCanchas
): EstadoCancha {
    switch (action.type) {
        case LISTAR_CANCHAS:
            return {
                ...state,
                cancha: action.payload,
            };
        case AGREGAR_CANCHAS: {
            const cancha = action.payload;
            return {
                ...state,
                cancha: [...state.cancha, cancha]
            };
        }
        default:
            return state;
    }
}