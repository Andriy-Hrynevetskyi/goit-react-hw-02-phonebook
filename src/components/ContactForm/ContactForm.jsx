import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledErrorMessage,
} from './ContactForm.styled';

const PHONE_REGEX =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gm;
const PHONE_ERROR_MSG =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const NAME_REGEX = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const NAME_ERROR_MSG =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const EMPTY_FIELD_ERROR_MSG = 'This field is required';

let validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(NAME_REGEX, NAME_ERROR_MSG)
    .required(EMPTY_FIELD_ERROR_MSG),
  number: yup
    .string()
    .required(EMPTY_FIELD_ERROR_MSG)
    .matches(PHONE_REGEX, PHONE_ERROR_MSG),
});

export class ContactForm extends Component {
  static propTypes = {
    initialValues: PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLabel>
            Name
            <StyledInput type="text" name="name" />
            <StyledErrorMessage name="name" component={'div'} />
          </StyledLabel>

          <StyledLabel>
            Number
            <StyledInput type="tel" name="number" />
            <StyledErrorMessage name="number" component={'div'} />
          </StyledLabel>

          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    );
  }
}
