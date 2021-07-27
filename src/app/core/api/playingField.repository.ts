import { PlayingField } from '../../feature/playingField/models/PlayingField';
import { axiosIntance } from '../config/AxiosConfig';

export const PlayingFieldRepository = {
    consultplayingField: () =>
        axiosIntance.get('/cancha/listar'),


    addPlayingField: async (playingField: PlayingField) => {
        await axiosIntance.post('/cancha',
            JSON.stringify(playingField)
            , {}).then((response) => {
            }, (error) => {
            });
    },

    updatePlayingField: async (idPlayingField: number, playingField: PlayingField) => {
        await axiosIntance.put(`/cancha/actualizar/${idPlayingField}`,
            JSON.stringify(playingField)
            , {}).then((response) => {
            }, (error) => {
            });
    }
};
