import {
  addPlatingFieldAsync,
  deletePlayingField,
  playingFieldListAsync,
  savePalyingField,
  updatePlayingFieldAsync,
} from 'app/core/redux/acciones/playingField/PlayingFieldAction';
import { PlayingListoManagment } from '../containers/PlayinFieldManagment';
import { StatusGeneral } from 'app/core/redux/modelo/StatusGeneral';

import { connect } from 'react-redux';

const mapStateToProps = (state: StatusGeneral) => {
  return state.playingField;
};

export const PlayingFieldManagmentProvaider = connect(mapStateToProps, {
  addPlatingField: addPlatingFieldAsync,
  playingFieldList: playingFieldListAsync,
  updatePlayingField: updatePlayingFieldAsync,
  savePalyingField,
  deletePlayingField,
})(PlayingListoManagment);
