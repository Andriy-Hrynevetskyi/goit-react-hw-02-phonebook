import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  border-radius: 8px;
  outline: 1px solid blue;
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  outline: 1px solid red;
`;

export const StyledInput = styled(Field)`
  width: 90%;
  padding: 4px;
  color: green;
  outline: 1px solid green;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  width: 100%;
  color: red;
  text-align: center;
  padding: 4px;
`;
