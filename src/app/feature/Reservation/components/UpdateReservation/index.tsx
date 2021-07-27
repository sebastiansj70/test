import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Form } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Reservation } from '../../models/Reservation';
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


interface UpdateReservationProps {
    onSubmit: (idReservation: number, payload: Reservation) => any;
    formTitle: string;
    reservation: Reservation;
    initialValues?: FormValues;
    handleShow: () => void;

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

export const UpdateReservation: React.FC<UpdateReservationProps> = ({
    onSubmit,
    handleShow,
    reservation,
    formTitle,
    initialValues = {
        idticket: reservation.idTicket,
        telefonoUsuario: reservation.telefonoUsuario,
        nombreUsuario: reservation.nombreUsuario,
        horaIngreso: reservation.horaIngreso,
        horaSalida: reservation.horaSalida,
        idCancha: reservation.idCancha,
        valor: reservation.valor,
    },

}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit(values.idticket, {
            idTicket: values.idticket,
            telefonoUsuario: values.telefonoUsuario,
            nombreUsuario: values.nombreUsuario,
            horaIngreso: values.horaIngreso,
            horaSalida: values.horaSalida,
            idCancha: values.idCancha,
            valor: values.valor,
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
            <Button type="submit" name="Actualizar">Actualizar</Button>
        </Form>

    );
};

UpdateReservation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    reservation: PropTypes.shape({
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
};
