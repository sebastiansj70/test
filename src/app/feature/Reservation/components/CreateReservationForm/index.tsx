import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Form, SpanError } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Reservation } from '../../models/Reservation';
import { Tittle } from '../../../../shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
    idTicket: number;
    telefonoUsuario: string;
    nombreUsuario: string;
    horaIngreso: string;
    horaSalida: string;
    idCancha: string;
    valor: string
}

interface CreateReservationFormProp {
    onSubmit: (payload: Reservation) => any;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
    handleReservationList: () => void;
}
const validationSchema = Yup.object().shape<FormValues>({
    idTicket: Yup.number().required(''),
    telefonoUsuario: Yup.string().required('El campo telefono de usuario es requerido.'),
    nombreUsuario: Yup.string().required('El campo nombre de usuario es requerido.'),
    horaIngreso: Yup.string().required('El campo hora de ingreso es requerido.'),
    horaSalida: Yup.string().required('El campo hora de salida es requerido.'),
    idCancha: Yup.string().required('El campo numero de cancha es requerido.'),
    valor: Yup.string().required('El campo valor es requerido.'),
});

export const CreateReservationForm: React.FC<CreateReservationFormProp> = ({
    onSubmit,
    handleReservationList,
    disabled,
    formTitle,
    initialValues = {
        idTicket: 1,
        telefonoUsuario: '',
        nombreUsuario: '',
        horaIngreso: '',
        horaSalida: '',
        idCancha: '',
        valor: '',
    },
}) => {
    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            idTicket: values.idTicket,
            telefonoUsuario: parseInt(values.telefonoUsuario),
            nombreUsuario: values.nombreUsuario,
            horaIngreso: parseInt(values.horaIngreso),
            horaSalida: parseInt(values.horaSalida),
            idCancha: parseInt(values.idCancha),
            valor: parseInt(values.valor)
        });
        resetForm();
        handleReservationList();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Tittle msg={formTitle} />
            <Input
                id='telefonoUsuario'
                disabled={disabled}
                placeholder='Telefono de usuario'
                name='telefonoUsuario'
                onChange={formik.handleChange}
            />
            {formik.touched.telefonoUsuario && formik.errors.telefonoUsuario && (
                <SpanError>{formik.errors.telefonoUsuario}</SpanError>
            )}
            <Input
                id='nombreUsuario'
                disabled={disabled}
                placeholder='Nombre de usuario'
                name='nombreUsuario'
                onChange={formik.handleChange}
            />
            {formik.touched.nombreUsuario && formik.errors.nombreUsuario && (
                <SpanError>{formik.errors.nombreUsuario}</SpanError>
            )}
            <Input
                id='horaIngreso'
                disabled={disabled}
                placeholder='Hora de ingreso'
                name='horaIngreso'
                onChange={formik.handleChange}
            />
            {formik.touched.horaIngreso && formik.errors.horaIngreso && (
                <SpanError>{formik.errors.horaIngreso}</SpanError>
            )}
            <Input
                id='horaSalida'
                disabled={disabled}
                placeholder='Hora salida'
                name='horaSalida'
                onChange={formik.handleChange}
            />
            {formik.touched.horaSalida && formik.errors.horaSalida && (
                <SpanError>{formik.errors.horaSalida}</SpanError>
            )}
            <Input
                id='idCancha'
                disabled={disabled}
                placeholder='Numero de cancha'
                name='idCancha'
                onChange={formik.handleChange}
            />
            {formik.touched.idCancha && formik.errors.idCancha && (
                <SpanError>{formik.errors.idCancha}</SpanError>
            )}
            <Input
                id='valor'
                disabled={disabled}
                placeholder='Valor'
                name='valor'
                onChange={formik.handleChange}
            />
            {formik.touched.valor && formik.errors.valor && (
                <SpanError>{formik.errors.valor}</SpanError>
            )}
            <Button type="submit" name='registro-ticket'>Registrar</Button>
        </Form>
    );
};


CreateReservationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.string.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.string.isRequired,
        horaSalida: PropTypes.string.isRequired,
        idCancha: PropTypes.string.isRequired,
        valor: PropTypes.string.isRequired,
    }),
    handleReservationList: PropTypes.func.isRequired,
};
