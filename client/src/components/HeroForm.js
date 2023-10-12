import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function HeroForm({ availablePowers, onSubmit }) {
  return (
    <div>
      <h2>Create a New Hero</h2>
      <Formik
        initialValues={{ name: '', superpower: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values); // Call createHero with form values
          resetForm(); // Reset the form after submission
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="superpower">Superpower</label>
            <Field as="select" id="superpower" name="superpower">
              <option value="">Select a superpower</option>
              {availablePowers.map((power, index) => (
                <option key={index} value={power}>
                  {power}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <button type="submit">Create Hero</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default HeroForm;
