import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { PlayingField } from '../../models/PlayingField';
import { Tittle } from 'app/shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
    idCancha: string;
    statusCancha: string;
}

interface PlayingFieldFormProp {
    onSubmit: (payload: PlayingField) => any;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
    handleListTicket: () => void;

}


const validationSchema = Yup.object().shape<FormValues>({
    idCancha: Yup.string().required('El campo id cancha es requerido.'),
    statusCancha: Yup.string().required('El campo status Cancha es requerido.'),
});


export const PlayingFieldForm: React.FC<PlayingFieldFormProp> = (({
    onSubmit,
    handleListTicket,
    disabled,
    formTitle,
    initialValues = {
        idCancha: '',
        statusCancha: '',
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            idCancha: parseInt(values.idCancha),
            statusCancha: values.statusCancha,
        });
        handleListTicket();
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });


    return (
        <Form onSubmit={formik.handleSubmit} >
            <Tittle
                msg={formTitle}
            />
            <Input
                disabled={disabled}
                placeholder='Número de cancha'
                name='idCancha'
                onChange={formik.handleChange}
                type='number'
            />
            {formik.touched.idCancha && formik.errors.idCancha && (
                <SpanError>{formik.errors.idCancha}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Estado de la cancha'
                name='statusCancha'
                onChange={formik.handleChange}
            />
            {formik.touched.statusCancha && formik.errors.statusCancha && (
                <SpanError>{formik.errors.statusCancha}</SpanError>
            )}
            <Button type='submit'>Registrar</Button>
        </Form>
    );
});



PlayingFieldForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        idCancha: PropTypes.string.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }),
    handleListTicket: PropTypes.func.isRequired,
};
