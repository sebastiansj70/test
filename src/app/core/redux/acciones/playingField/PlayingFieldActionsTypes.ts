import { PlayingField } from 'app/feature/playingField/models/PlayingField';

export const PLAYING_FIELD_LIST = 'PLAYING_FIELD_LIST';
export const ADD_PLAYING_FIELD = 'ADD_PLAYING_FIELD';
export const DELETE_PLAYING_FIELD = 'DELETE_PLAYING_FIELD';
export const UPDATE_PLAYING_FIELD = 'UPDATE_PLAYING_FIELD';
export const SAVE_PLAYING_FIELD = 'SAVE_PLAYING_FIELD';

interface AccionPlayingFieldList {
    type: typeof PLAYING_FIELD_LIST;
    payload: PlayingField[];
}

interface AccionaddPlayingField {
    type: typeof ADD_PLAYING_FIELD;
    payload: PlayingField;
}

interface AccionDeletePlayingField {
    type: typeof DELETE_PLAYING_FIELD;
    payload: PlayingField;
}

interface AcctionUpdatePlayingField {
    type: typeof UPDATE_PLAYING_FIELD;
    payload: PlayingField;
}

interface AcctionSavePlayingField {
    type: typeof SAVE_PLAYING_FIELD;
    payload: PlayingField;
}

export type PlayingListActionsTypes =
    | AccionPlayingFieldList
    | AccionaddPlayingField
    | AccionDeletePlayingField
    | AcctionUpdatePlayingField
    | AcctionSavePlayingField;
