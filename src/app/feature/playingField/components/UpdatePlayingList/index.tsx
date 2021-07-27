import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { PlayingField } from '../../models/PlayingField';
import { Tittle } from 'app/shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
    idCancha: number;
    statusCancha: string;
}


interface UpdatePlayingListProps {
    onSubmit: (idCancha: number, payload: PlayingField) => void;
    formTitle: string;
    playingField: PlayingField;
    initialValues?: FormValues;
    handleCloseModal: () => void;

}
const validationSchema = Yup.object().shape<FormValues>({
    idCancha: Yup.number().required('El campo numero de cancha es requerido.'),
    statusCancha: Yup.string().required('El campo stado de cancha es requerido.'),

});

export const UpdatePlayingList: React.FC<UpdatePlayingListProps> = ({
    onSubmit,
    handleCloseModal,
    playingField,
    formTitle,
    initialValues = {
        idCancha: playingField.idCancha,
        statusCancha: playingField.statusCancha,
    },

}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit(values.idCancha, {
            idCancha: values.idCancha,
            statusCancha: values.statusCancha,
        });
        resetForm();
        handleCloseModal();
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Tittle
                msg={formTitle}
            />
            <Input
                placeholder=''
                name='idCancha'
                onChange={formik.handleChange}
                type='number'
                value={formik.values.idCancha}
            />
            <Input
                placeholder=''
                name='statusCancha'
                onChange={formik.handleChange}
                value={formik.values.statusCancha}
            />
            <Button type="submit" name="Actualizar">Actualizar</Button>
        </Form>
    );
};

UpdatePlayingList.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    playingField: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,

    }).isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }),
};
