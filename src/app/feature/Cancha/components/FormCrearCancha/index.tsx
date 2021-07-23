import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers, FormikValues } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Cancha } from '../../models/Cancha';
// import { SpanError } from './styles';
import { Formik, useFormik } from 'formik';
import { Tittle } from '../../../../shared/components/Tittle'
import { Form, SpanError } from './styles'

interface FormValues {
    idCancha: number;
    statusCancha: string;
}

interface FormCrearCanchaProp {
    onSubmit: (payload: Cancha) => any;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
}


const validationSchema = Yup.object().shape<FormValues>({
    idCancha: Yup.number().required('El campo id cancha es requerido.'),
    statusCancha: Yup.string().required('El campo status Cancha es requerido.'),
});


export const FormCrearCancha: React.FC<FormCrearCanchaProp> = (({
    onSubmit,
    disabled,
    formTitle,
    initialValues = {
        idCancha: 321,
        statusCancha: '',
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            idCancha: values.idCancha,
            statusCancha: values.statusCancha,
        });
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    })


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
    )
});



FormCrearCancha.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }),
};
