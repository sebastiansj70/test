import {
    UPDATE_PLAYING_FIELD,
    ADD_PLAYING_FIELD,
    DELETE_PLAYING_FIELD,
    SAVE_PLAYING_FIELD,
    PLAYING_FIELD_LIST,
    PlayingListActionsTypes
} from './PlayingFieldActionsTypes';
import { PlayingField } from 'app/feature/playingField/models/PlayingField';
import { PlayingFieldRepository } from 'app/core/api/playingField.repository';

export function playingFieldList(
    playingField: Array<PlayingField>,
): PlayingListActionsTypes {
    return {
        type: PLAYING_FIELD_LIST,
        payload: playingField,
    };
}

export function addNewPlayingField(
    playingField: PlayingField
): PlayingListActionsTypes {
    return {
        type: ADD_PLAYING_FIELD,
        payload: playingField,
    };
}

export function deletePlayingField(
    playingField: PlayingField
): PlayingListActionsTypes {
    return {
        type: DELETE_PLAYING_FIELD,
        payload: playingField,
    };
}

export function updatePlayingField(
    playingField: PlayingField
): PlayingListActionsTypes {
    return {
        type: UPDATE_PLAYING_FIELD,
        payload: playingField
    };
}

export function playingFieldListAsync() {
    return function (dispacth: any) {
        PlayingFieldRepository.consultplayingField()
            .then((respuesta: any) =>
                dispacth(
                    playingFieldList(respuesta.data)
                )
            );
    };
}

export function addPlatingFieldAsync(playingField: PlayingField) {
    return function () {
        PlayingFieldRepository.addPlayingField(
            playingField
        );
    };
}

export function updatePlayingFieldAsync(idplayingField: number, playingField: PlayingField) {
    return function () {
        PlayingFieldRepository.updatePlayingField(
            idplayingField, playingField
        );
    };
}


export function savePalyingField(
    playingField: PlayingField
): PlayingListActionsTypes {
    return {
        type: SAVE_PLAYING_FIELD,
        payload: playingField
    };
}
