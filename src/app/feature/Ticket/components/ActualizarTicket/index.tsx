import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Ticket } from '../../models/Ticket';
import { Tittle } from 'app/shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
    idticket: number;
    telefonoUsuario: number;
    nombreUsuario: string;
    horaIngreso: number;
    horaSalida: number;
    idCancha: number;
    valor: number
}


interface ActualizarTicketProps {
    // onEliminar: (ticket: Ticket) => any;
    onSubmit: (idTicket: number, payload: Ticket) => any;
    formTitle: string;
    ticket: Ticket;
    initialValues?: FormValues;
    handleShow: (show: boolean) => void;

}
const validationSchema = Yup.object().shape<FormValues>({
    idticket: Yup.number().required(''),
    telefonoUsuario: Yup.number().required('El campo telefono de usuario es requerido.'),
    nombreUsuario: Yup.string().required('El campo nombre de usuario es requerido.'),
    horaIngreso: Yup.number().required('El campo hora de ingreso es requerido.'),
    horaSalida: Yup.number().required('El campo hora de salida es requerido.'),
    idCancha: Yup.number().required('El campo numero de cancha es requerido.'),
    valor: Yup.number().required('El campo valor es requerido.'),
});

export const ActualizarTicket: React.FC<ActualizarTicketProps> = ({
    // onEliminar,
    onSubmit,
    handleShow,
    ticket,
    formTitle,
    initialValues = {
        idticket: ticket.idTicket,
        telefonoUsuario: ticket.telefonoUsuario,
        nombreUsuario: ticket.nombreUsuario,
        horaIngreso: ticket.horaIngreso,
        horaSalida: ticket.horaSalida,
        idCancha: ticket.idCancha,
        valor: ticket.valor,
    },

}) => {
    // const handleEliminar = () => onEliminar(ticket);
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        console.log(values, 'submit');
        onSubmit(values.idticket, {
            idTicket: values.idticket,
            telefonoUsuario: values.telefonoUsuario,
            nombreUsuario: values.nombreUsuario,
            horaIngreso: values.horaIngreso,
            horaSalida: values.horaSalida,
            idCancha: values.idCancha,
            valor: values.valor,
        });
        handleShow(false);
        resetForm();
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
                name='telefonoUsuario'
                onChange={formik.handleChange}
                type='number'
                value={formik.values.telefonoUsuario}
            />

            <Input
                placeholder=''
                name='nombreUsuario'
                onChange={formik.handleChange}
                value={formik.values.nombreUsuario}

            />

            <Input
                placeholder=''
                name='horaIngreso'
                onChange={formik.handleChange}
                type='number'
                value={formik.values.horaIngreso}

            />
            <Input
                placeholder=''
                name='horaSalida'
                onChange={formik.handleChange}
                type='number'
                value={formik.values.horaSalida}

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
                name='valor'
                onChange={formik.handleChange}
                type='number'
                value={formik.values.valor}
                readOnly={false}
            />
            <Button type="submit">Actualizar</Button>
        </Form>

    );
};

ActualizarTicket.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    ticket: PropTypes.shape({
        idTicket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }).isRequired,
    handleShow: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        idticket: PropTypes.number.isRequired,
        telefonoUsuario: PropTypes.number.isRequired,
        nombreUsuario: PropTypes.string.isRequired,
        horaIngreso: PropTypes.number.isRequired,
        horaSalida: PropTypes.number.isRequired,
        idCancha: PropTypes.number.isRequired,
        valor: PropTypes.number.isRequired,
    }),
    // onEliminar: PropTypes.func.isRequired,
};
