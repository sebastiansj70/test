import { Cancha } from 'app/feature/Cancha/models/Cancha';

export const LISTAR_CANCHAS = 'LISTAR_CANCHAS';
export const AGREGAR_CANCHAS = 'AGREGAR_CANCHAS';
export const ELIMINAR_CANCHAS = 'ELIMINAR_CANCHAS';
export const ACTUALIZAR_CANCHAS = 'ACTUALIZAR_CANCHAS';

interface AccionListarCanchas {
    type: typeof LISTAR_CANCHAS;
    payload: Cancha[];
}

interface AccionAgregarCancha {
    type: typeof AGREGAR_CANCHAS;
    payload: Cancha;
}

interface AccionEliminarCancha {
    type: typeof ELIMINAR_CANCHAS;
    payload: Cancha;
}

interface AcctionActualizarCancha {
    type: typeof ACTUALIZAR_CANCHAS;
    payload: Cancha;
}

export type TiposAccionesCanchas =
    | AccionListarCanchas
    | AccionAgregarCancha
    | AccionEliminarCancha
    | AcctionActualizarCancha;
