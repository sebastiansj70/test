import {
    ACTUALIZAR_CANCHAS,
    AGREGAR_CANCHAS,
    ELIMINAR_CANCHAS,
    LISTAR_CANCHAS,
    TiposAccionesCanchas,
    GUARDAR_CANCHA
} from './CanchasTiposAcciones';
import { Cancha } from 'app/feature/Cancha/models/Cancha';
import { CanchaRepositorio } from 'app/core/api/cancha.repositorio';

export function listarCanchas(
    cancha: Array<Cancha>,
): TiposAccionesCanchas {
    return {
        type: LISTAR_CANCHAS,
        payload: cancha,
    };
}

export function agregarNuevaCancha(
    cancha: Cancha
): TiposAccionesCanchas {
    return {
        type: AGREGAR_CANCHAS,
        payload: cancha,
    };
}

export function eliminarCanchas(
    cancha: Cancha
): TiposAccionesCanchas {
    return {
        type: ELIMINAR_CANCHAS,
        payload: cancha,
    };
}

export function actualizarTicket(
    cancha: Cancha
): TiposAccionesCanchas {
    return {
        type: ACTUALIZAR_CANCHAS,
        payload: cancha
    };
}

export function listarCanchaAsync() {
    return function (dispacth: any) {
        CanchaRepositorio.consultarCancha()
            .then((respuesta: any) =>
                dispacth(
                    listarCanchas(respuesta.data)
                )
            );
    };
}

export function agregarCanchaAsync(cancha: Cancha) {
    return function () {
        CanchaRepositorio.AgregarCancha(
            cancha
        );
    };
}

export function actualizarCanchaAsync(idCancha: number, cancha: Cancha) {
    return function () {
        CanchaRepositorio.actualizarCancha(
            idCancha, cancha
        );
    };
}


export function guardarCancha(
    cancha: Cancha
): TiposAccionesCanchas {
    return {
        type: GUARDAR_CANCHA,
        payload: cancha
    };
}