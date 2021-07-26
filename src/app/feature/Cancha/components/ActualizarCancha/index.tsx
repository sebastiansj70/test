import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Cancha } from '../../models/Cancha';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Tittle } from 'app/shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
    idCancha: number;
    statusCancha: string;
}


interface ActualizarCanchaProps {
    onSubmit: (idCancha: number, payload: Cancha) => void;
    formTitle: string;
    cancha: Cancha;
    initialValues?: FormValues;
    handleShow: () => void;

}
const validationSchema = Yup.object().shape<FormValues>({
    idCancha: Yup.number().required('El campo numero de cancha es requerido.'),
    statusCancha: Yup.string().required('El campo stado de cancha es requerido.'),

});

export const ActualizarCancha: React.FC<ActualizarCanchaProps> = ({
    // onEliminar,
    onSubmit,
    handleShow,
    cancha,
    formTitle,
    initialValues = {
        idCancha: cancha.idCancha,
        statusCancha: cancha.statusCancha,
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
        handleShow();
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

ActualizarCancha.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    cancha: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,

    }).isRequired,
    handleShow: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }),
    // onEliminar: PropTypes.func.isRequired,
};
