import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CardCancha } from '../Card';
import { ContentCard } from './styles';
import Modal from '@material-ui/core/Modal';
import { PlayingField } from '../../models/PlayingField';
import { Tittle } from '../../../../shared/components/Tittle';
import { UpdatePlayingList } from '../UpdatePlayingList';

export interface PlayingFieldListProps {
  playingFieldLists: Array<PlayingField>;
  playingField: PlayingField;
  updatePlayingField: (
    idplayingField: number,
    playingField: PlayingField
  ) => void;
  savePalyingField: (playingField: PlayingField) => void;
}

export const PlayingFieldList: React.FC<PlayingFieldListProps> = ({
  playingFieldLists,
  playingField,
  updatePlayingField,
  savePalyingField,
}) => {
  useEffect(() => {}, [updatePlayingField]);

  const [open, setOpen] = React.useState(false);

  const handleOpenModal = (playingFields: PlayingField) => {
    savePalyingField(playingFields);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <ContentCard>
      <Tittle msg="Lista de campos de juego" />
      {playingFieldLists.map((aplayingField: PlayingField) => {
        return (
          <div
            id={'canchaList'}
            key={Math.random()}
            onClick={() => handleOpenModal(aplayingField)}
          >
            <CardCancha
              key={Math.random()}
              idCancha={aplayingField.idCancha}
              statusCancha={aplayingField.statusCancha}
            />
          </div>
        );
      })}

      <div>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              background: '#FFF',
              width: '80vmin',
              padding: '4vmin',
              borderRadius: '2vmin',
            }}
          >
            <UpdatePlayingList
              playingField={playingField}
              formTitle="Actualizar Ticket"
              onSubmit={updatePlayingField}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </Modal>
      </div>
    </ContentCard>
  );
};

PlayingFieldList.propTypes = {
  playingFieldLists: PropTypes.array.isRequired,
  playingField: PropTypes.shape({
    idCancha: PropTypes.number.isRequired,
    statusCancha: PropTypes.string.isRequired,
  }).isRequired,
  updatePlayingField: PropTypes.func.isRequired,
  savePalyingField: PropTypes.func.isRequired,
};
