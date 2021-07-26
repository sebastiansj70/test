import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ActualizarCancha } from '../ActualizarCancha';
import { Cancha } from '../../models/Cancha';
import { CardCancha } from '../Card';
import { ContentCard } from './styles';
import Modal from '@material-ui/core/Modal';
import { Tittle } from '../../../../shared/components/Tittle';
import { useEffect } from 'react';


export interface ListaCanchaProps {
    cancha: Array<Cancha>;
    canchaNew: Cancha,
    actualizarCancha: (idCancha: number, cancha: Cancha) => void;
    guardarCancha: (cancha: Cancha) => void;
}

export const ListaCancha: React.FC<ListaCanchaProps> = ({
    cancha,
    canchaNew,
    actualizarCancha,
    guardarCancha
}) => {

    useEffect(() => {
    }, [actualizarCancha]);


    const [open, setOpen] = React.useState(false);

    const handleOpen = (cancha: Cancha) => {
        guardarCancha(cancha);
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <ContentCard>
            <Tittle
                msg='Lista de canchas'
            />
            {
                cancha.map((cancha: Cancha) => {
                    return (
                        <CardCancha
                            key={Math.random()}
                            idCancha={cancha.idCancha}
                            statusCancha={cancha.statusCancha}
                        />
                    );
                })
            }

            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                >
                    <div style={{ background: '#FFF', width: '80vmin', padding: '4vmin', borderRadius: '2vmin' }}>
                        <ActualizarCancha
                            cancha={canchaNew}
                            formTitle='Actualizar Ticket'
                            onSubmit={actualizarCancha}
                            handleShow={handleClose}
                        />
                    </div>
                </Modal>
            </div>

        </ContentCard>
    );
};

ListaCancha.propTypes = {
    cancha: PropTypes.array.isRequired,
};
