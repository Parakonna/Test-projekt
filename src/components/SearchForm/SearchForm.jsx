import { Formik, Form, Field, ErrorMessage } from 'formik';
import { searchSchema } from '../utils/schemas';
import css from './SearchForm.module.css';

const INITIAL_VALUES = {
  searchTerm: '',
};

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    onSearch(values.searchTerm);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchSchema}
    >
      <Form>
        <label>
          <Field type="text" name="searchTerm" />
          <ErrorMessage
            className={css.error}
            name="searchTerm"
            component="spam"
          />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
