import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers, FormikValues } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Ticket } from '../../models/Ticket';
import { SpanError, Form } from './styles';
import { Formik, useFormik } from 'formik';
import { Tittle } from '../../../../shared/components/Tittle'

interface FormValues {
    idTicket: number;
    telefonoUsuario: number;
    nombreUsuario: string;
    horaIngreso: number;
    horaSalida: number;
    idCancha: number;
    valor: number
}

interface FormCrearTicketProp {
    onSubmit: (payload: Ticket) => any;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
}
const validationSchema = Yup.object().shape<FormValues>({
    idTicket: Yup.number().required(''),
    telefonoUsuario: Yup.number().required('El campo telefono de usuario es requerido.'),
    nombreUsuario: Yup.string().required('El campo nombre de usuario es requerido.'),
    horaIngreso: Yup.number().required('El campo hora de ingreso es requerido.'),
    horaSalida: Yup.number().required('El campo hora de salida es requerido.'),
    idCancha: Yup.number().required('El campo numero de cancha es requerido.'),
    valor: Yup.number().required('El campo valor es requerido.'),
});

export const FormCrearTicket: React.FC<FormCrearTicketProp> = (({
    onSubmit,
    disabled,
    formTitle,
    initialValues = {
        idTicket: 1,
        telefonoUsuario: 321,
        nombreUsuario: '',
        horaIngreso: 0,
        horaSalida: 0,
        idCancha: 0,
        valor: 0,
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            idTicket: values.idTicket,
            telefonoUsuario: values.telefonoUsuario,
            nombreUsuario: values.nombreUsuario,
            horaIngreso: values.horaIngreso,
            horaSalida: values.horaSalida,
            idCancha: values.idCancha,
            valor: values.valor
        });
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Tittle
                msg={formTitle} />
            <Input
                disabled={disabled}
                placeholder='Telefono de usuario'
                name='telefonoUsuario'
                onChange={formik.handleChange}
                // value={formik.values.telefonoUsuario}
                type='number'
            />
            {formik.touched.telefonoUsuario && formik.errors.telefonoUsuario && (
                <SpanError>{formik.errors.telefonoUsuario}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Nombre de usuario'
                name='nombreUsuario'
                onChange={formik.handleChange}
            // value={formik.values.nombreUsuario}
            />
            {formik.touched.nombreUsuario && formik.errors.nombreUsuario && (
                <SpanError>{formik.errors.nombreUsuario}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Hora de ingreso'
                name='horaIngreso'
                onChange={formik.handleChange}
                // value={formik.values.horaIngreso}
                type='number'
            />
            {formik.touched.horaIngreso && formik.errors.horaIngreso && (
                <SpanError>{formik.errors.horaIngreso}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Hora salida'
                name='horaSalida'
                onChange={formik.handleChange}
                // value={formik.values.horaSalida}
                type='number'
            />
            {formik.touched.horaSalida && formik.errors.horaSalida && (
                <SpanError>{formik.errors.horaSalida}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Numero de cancha'
                name='idCancha'
                onChange={formik.handleChange}
                // value={formik.values.idCancha}
                type='number'
            />
            {formik.touched.idCancha && formik.errors.idCancha && (
                <SpanError>{formik.errors.idCancha}</SpanError>
            )}
            <Input
                disabled={disabled}
                placeholder='Valor'
                name='valor'
                onChange={formik.handleChange}
                // value={formik.values.valor}
                type='number'
            />{formik.touched.valor && formik.errors.valor && (
                <SpanError>{formik.errors.valor}</SpanError>
            )}
            <Button type="submit">Registrar</Button>
        </Form>
    )
});


FormCrearTicket.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }),

};
