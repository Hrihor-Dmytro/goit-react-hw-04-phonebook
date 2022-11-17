import { Formik } from 'formik';
import {
  FormLabel,
  FormInput,
  FormButton,
  FormWrapp,
} from './FormComponent.stiyled';

const initialValues = {
  name: '',
  number: '',
};

export const Form = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormWrapp autoComplete="off">
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Please, enter your Name"
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Please, enter your Number"
          />
        </FormLabel>
        <FormButton type="submit">Add</FormButton>
      </FormWrapp>
    </Formik>
  );
};
