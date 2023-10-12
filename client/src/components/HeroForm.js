import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HeroForm = ({ onSubmit, availablePowers }) => {
  return (
    <div>
      <h1>Hero Submission Form</h1>
      <Formik
        initialValues={{ name: '', power: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          power: Yup.string().required('Power is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="power">Power:</label>
            <Field as="select" name="power" id="power">
              <option value="">Select a power</option>
              {availablePowers.map((power) => (
                <option key={power} value={power}>
                  {power}
                </option>
              ))}
            </Field>
            <ErrorMessage name="power" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default HeroForm;
