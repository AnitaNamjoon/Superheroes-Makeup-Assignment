// src/components/HeroForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PowerList from './PowerList';

const HeroForm = ({ onSubmit }) => {
  const availablePowers = ['Super Strength', 'Flight', 'Telekinesis', 'Invisibility', 'Teleportation'];

  const handleSelectPower = (selectedPower, setFieldValue) => {
    setFieldValue('power', selectedPower);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        power: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name is required'),
        power: Yup.string().required('Power is required'),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Power:</label>
            <Field type="text" name="power" />
            <ErrorMessage name="power" component="div" />
            <PowerList powers={availablePowers} onSelectPower={(selectedPower) => handleSelectPower(selectedPower, setFieldValue)} />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
