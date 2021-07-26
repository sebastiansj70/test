import { Cancha } from '../../feature/Cancha/models/Cancha';
import { axiosIntance } from '../config/AxiosConfig';

export const CanchaRepositorio = {
    consultarCancha: async () =>
        await axiosIntance.get('/cancha/listar'),


    AgregarCancha: async (cancha: Cancha) => {
        await axiosIntance.post('/cancha',
            JSON.stringify(cancha)
            , {}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    },

    actualizarCancha: async (idCancha: number, cancha: Cancha) => {
        await axiosIntance.put(`/cancha/actualizar/${idCancha}`,
            JSON.stringify(cancha)
            , {}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
};