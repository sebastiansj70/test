import {
    updatePlayingFieldAsync,
    addPlatingFieldAsync,
    deletePlayingField,
    savePalyingField,
    playingFieldListAsync
} from 'app/core/redux/acciones/playingField/PlayingFieldAction';
import { StatusGeneral } from 'app/core/redux/modelo/StatusGeneral';
import { PlayingListoManagment } from '../containers/PlayinFieldManagment';

import { connect } from 'react-redux';


const mapStateToProps = (state: StatusGeneral) => {
    return state.playingField;
};


export const PlayingFieldManagmentProvaider = connect(mapStateToProps, {
    addPlatingField: addPlatingFieldAsync,
    deletePlayingField,
    playingFieldList: playingFieldListAsync,
    updatePlayingField: updatePlayingFieldAsync,
    savePalyingField,
})(PlayingListoManagment);