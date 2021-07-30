import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Reservation } from '../../models/Reservation';
import { Tittle } from 'app/shared/components/Tittle';
import { useFormik } from 'formik';

interface FormValues {
  idticket: number;
  telefonoUsuario: string;
  nombreUsuario: string;
  horaIngreso: string;
  horaSalida: string;
  idCancha: string;
  valor: string;
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
  telefonoUsuario: Yup.string().required(
    'El campo telefono de usuario es requerido.'
  ),
  nombreUsuario: Yup.string().required(
    'El campo nombre de usuario es requerido.'
  ),
  horaIngreso: Yup.string().required('El campo hora de ingreso es requerido.'),
  horaSalida: Yup.string().required('El campo hora de salida es requerido.'),
  idCancha: Yup.string().required('El campo numero de cancha es requerido.'),
  valor: Yup.string().required('El campo valor es requerido.'),
});

export const UpdateReservation: React.FC<UpdateReservationProps> = ({
  onSubmit,
  handleShow,
  reservation,
  formTitle,
  initialValues = {
    idticket: reservation.idTicket,
    telefonoUsuario: `${reservation.telefonoUsuario}`,
    nombreUsuario: reservation.nombreUsuario,
    horaIngreso: `${reservation.horaIngreso}`,
    horaSalida: `${reservation.horaSalida}`,
    idCancha: `${reservation.idCancha}`,
    valor: `${reservation.valor}`,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit(values.idticket, {
      idTicket: values.idticket,
      telefonoUsuario: parseInt(values.telefonoUsuario),
      nombreUsuario: values.nombreUsuario,
      horaIngreso: parseInt(values.horaIngreso),
      horaSalida: parseInt(values.horaSalida),
      idCancha: parseInt(values.idCancha),
      valor: parseInt(values.valor),
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
      <Tittle msg={formTitle} />
      <Input
        placeholder=""
        name="telefonoUsuario"
        onChange={formik.handleChange}
        value={formik.values.telefonoUsuario}
      />
      {formik.touched.telefonoUsuario && formik.errors.telefonoUsuario && (
        <SpanError>{formik.errors.telefonoUsuario}</SpanError>
      )}
      <Input
        placeholder=""
        name="nombreUsuario"
        onChange={formik.handleChange}
        value={formik.values.nombreUsuario}
      />
      {formik.touched.nombreUsuario && formik.errors.nombreUsuario && (
        <SpanError>{formik.errors.nombreUsuario}</SpanError>
      )}
      <Input
        placeholder=""
        name="horaIngreso"
        onChange={formik.handleChange}
        value={formik.values.horaIngreso}
      />
      {formik.touched.horaIngreso && formik.errors.horaIngreso && (
        <SpanError>{formik.errors.horaIngreso}</SpanError>
      )}
      <Input
        placeholder=""
        name="horaSalida"
        onChange={formik.handleChange}
        value={formik.values.horaSalida}
      />
      {formik.touched.horaSalida && formik.errors.horaSalida && (
        <SpanError>{formik.errors.horaSalida}</SpanError>
      )}
      <Input
        placeholder=""
        name="idCancha"
        onChange={formik.handleChange}
        value={formik.values.idCancha}
      />
      {formik.touched.idCancha && formik.errors.idCancha && (
        <SpanError>{formik.errors.idCancha}</SpanError>
      )}
      <Input
        placeholder=""
        name="valor"
        onChange={formik.handleChange}
        value={formik.values.valor}
        readOnly={false}
      />
      {formik.touched.valor && formik.errors.valor && (
        <SpanError>{formik.errors.valor}</SpanError>
      )}
      <Button type="submit" name="Actualizar">
        Actualizar
      </Button>
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
    telefonoUsuario: PropTypes.string.isRequired,
    nombreUsuario: PropTypes.string.isRequired,
    horaIngreso: PropTypes.string.isRequired,
    horaSalida: PropTypes.string.isRequired,
    idCancha: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
  }),
};
