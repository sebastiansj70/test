import { Cancha } from '../../feature/Cancha/models/Cancha';
import { axiosIntance } from '../config/AxiosConfig';

export const CanchaRepositorio = {
    consultarCancha: () =>
        axiosIntance.get('/cancha/listar'),


    AgregarCancha: (cancha: Cancha) => {
        axiosIntance.post('/cancha',
            JSON.stringify(cancha)
            , {}).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
};