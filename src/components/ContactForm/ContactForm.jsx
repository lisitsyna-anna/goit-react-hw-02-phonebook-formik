import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import { StyledForm, Label, Input, Button, ErrMsg } from './ContactForm.styled';

// Форма через Formik и yup:

// начальные значения полей:
const initialValues = {
  name: '',
  number: '',
};

// схема валидации:
const shema = Yup.object().shape({
  name: Yup.string().required(
    'Name is required field. Name may contain only letters, apostrophe, dash and spaces. '
  ),
  number: Yup.string()
    .phone(
      null,
      true,
      'Invalid phone number.Phone number must start with "+" and have at least 10 digits'
    )
    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={shema}
    >
      <StyledForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Ivanov Ivan"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <ErrMsg name="name" component="p" />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="111-11-111"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrMsg name="number" component="p" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
