import {
    AGREGAR_CANCHAS,
    GUARDAR_CANCHA,
    LISTAR_CANCHAS,
    TiposAccionesCanchas,
} from '../../acciones/cancha/CanchasTiposAcciones';
import { Cancha } from 'app/feature/Cancha/models/Cancha';
import { EstadoCancha } from '../../modelo/EstadoCancha';

const initialState: EstadoCancha = {
    cancha: Array<Cancha>(),
    canchaNew: {
        idCancha: 1,
        statusCancha: ''
    },
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
        case GUARDAR_CANCHA: {
            return {
                ...state,
                canchaNew: action.payload
            };
        }
        default:
            return state;
    }
}