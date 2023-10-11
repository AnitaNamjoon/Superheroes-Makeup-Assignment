import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const HeroForm = () => {
  const initialValues = {
    name: '',
    super_name: '',
    power: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    super_name: Yup.string().required('Super Name is required'),
    power: Yup.string().required('Power is required'),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/heroes', values);
      console.log('Hero added successfully:', response.data);
      // You can handle success or navigation here
    } catch (error) {
      console.error('Error adding hero:', error);
    }
  };

  return (
    <div>
      <h2>Add a Hero</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="super_name">Super Name:</label>
            <Field type="text" id="super_name" name="super_name" />
            <ErrorMessage name="super_name" component="div" />
          </div>

          <div>
            <label htmlFor="power">Power:</label>
            <Field type="text" id="power" name="power" />
            <ErrorMessage name="power" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default HeroForm;
