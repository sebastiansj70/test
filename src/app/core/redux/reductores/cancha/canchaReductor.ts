import {
    AGREGAR_CANCHAS,
    ELIMINAR_CANCHAS,
    LISTAR_CANCHAS,
    ACTUALIZAR_CANCHAS,
    TiposAccionesCanchas,
} from '../../acciones/cancha/CanchasTiposAcciones';
import { EstadoCancha } from '../../modelo/EstadoCancha';
import { Cancha } from 'app/feature/Cancha/models/Cancha';

const initialState: EstadoCancha = {
    cancha: Array<Cancha>()
}

export default function (
    state = initialState,
    action: TiposAccionesCanchas
): EstadoCancha {
    switch (action.type) {
        case LISTAR_CANCHAS:
            const cancha = action.payload;
            return {
                ...state,
                cancha,
            };
        case AGREGAR_CANCHAS: {
            const cancha = action.payload
            return {
                ...state,
                cancha: [...state.cancha, cancha]
            }
        }
        default:
            return state;
    }
}