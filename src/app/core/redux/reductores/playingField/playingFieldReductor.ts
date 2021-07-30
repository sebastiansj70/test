import {
    ADD_PLAYING_FIELD,
    PLAYING_FIELD_LIST,
    PlayingListActionsTypes,
    SAVE_PLAYING_FIELD,
} from '../../acciones/playingField/PlayingFieldActionsTypes';
import { PlayingField } from 'app/feature/playingField/models/PlayingField';
import { StatusPlayinField } from '../../modelo/StatusPlayingField';

const initialState: StatusPlayinField = {
    playingFieldLists: Array<PlayingField>(),
    playingField: {
        idCancha: 1,
        statusCancha: ''
    },
};

export default function (
    state = initialState,
    action: PlayingListActionsTypes
): StatusPlayinField {
    switch (action.type) {
        case PLAYING_FIELD_LIST:
            return {
                ...state,
                playingFieldLists: action.payload,
            };
        case ADD_PLAYING_FIELD: {
            const playingField = action.payload;
            return {
                ...state,
                playingFieldLists: [...state.playingFieldLists, playingField]
            };
        }
        case SAVE_PLAYING_FIELD: {
            return {
                ...state,
                playingField: action.payload
            };
        }
        default:
            return state;
    }
}
