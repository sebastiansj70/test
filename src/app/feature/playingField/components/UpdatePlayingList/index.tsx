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

interface UpdatePlayingListProps {
  onSubmit: (idCancha: number, payload: PlayingField) => void;
  formTitle: string;
  playingField: PlayingField;
  initialValues?: FormValues;
  handleCloseModal: () => void;
}
const validationSchema = Yup.object().shape<FormValues>({
  idCancha: Yup.string().required('El campo numero de cancha es requerido.'),
  statusCancha: Yup.string().required('El campo stado de cancha es requerido.'),
});

export const UpdatePlayingList: React.FC<UpdatePlayingListProps> = ({
  onSubmit,
  handleCloseModal,
  playingField,
  formTitle,
  initialValues = {
    idCancha: `${playingField.idCancha}`,
    statusCancha: playingField.statusCancha,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit(parseInt(values.idCancha,10), {
      idCancha: parseInt(values.idCancha,10),
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
      <Tittle msg={formTitle} />
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
        name="statusCancha"
        onChange={formik.handleChange}
        value={formik.values.statusCancha}
      />
      {formik.touched.statusCancha && formik.errors.statusCancha && (
        <SpanError>{formik.errors.statusCancha}</SpanError>
      )}
      <Button type="submit" name="Actualizar">
        Actualizar
      </Button>
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
    idCancha: PropTypes.string.isRequired,
    statusCancha: PropTypes.string.isRequired,
  }),
};
