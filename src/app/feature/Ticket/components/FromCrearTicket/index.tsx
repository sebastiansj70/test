import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Ticket } from '../../models/Ticket';
import { Tittle } from '../../../../shared/components/Tittle';
import { useFormik } from 'formik';

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
    handleListTicket: () => void;
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

export const Formcrearticket: React.FC<FormCrearTicketProp> = ({
    onSubmit,
    handleListTicket,
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
    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>
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
        handleListTicket();
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
                type='number'
            />
            <Input
                id='nombreUsuario'
                disabled={disabled}
                placeholder='Nombre de usuario'
                name='nombreUsuario'
                onChange={formik.handleChange}
            />
            <Input
                id='horaIngreso'
                disabled={disabled}
                placeholder='Hora de ingreso'
                name='horaIngreso'
                onChange={formik.handleChange}
                type='number'
            />
            <Input
                id='horaSalida'
                disabled={disabled}
                placeholder='Hora salida'
                name='horaSalida'
                onChange={formik.handleChange}
                type='number'
            />
            <Input
                id='idCancha'
                disabled={disabled}
                placeholder='Numero de cancha'
                name='idCancha'
                onChange={formik.handleChange}
                type='number'
            />
            <Input
                id='valor'
                disabled={disabled}
                placeholder='Valor'
                name='valor'
                onChange={formik.handleChange}
                type='number'
            />
            <Button type="submit" name='registro-ticket'>Registrar</Button>
        </Form>
    );
};


Formcrearticket.propTypes = {
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
    handleListTicket: PropTypes.func.isRequired,
};
