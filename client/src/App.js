import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const API_URL = 'http://your-api-url'; // Replace with your API URL

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    // Fetch heroes data from the API
    axios.get(`${API_URL}/heroes`)
      .then((response) => {
        setHeroes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching heroes:', error);
      });
  }, []);

  const submitHero = (values, { resetForm }) => {
    // Send a POST request to submit a new hero
    axios.post(`${API_URL}/heroes`, values)
      .then((response) => {
        // Update the heroes list with the new hero
        setHeroes([...heroes, response.data]);
        resetForm();
      })
      .catch((error) => {
        console.error('Error submitting hero:', error);
      });
  };

  return (
    <div>
      <h1>Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>

      <h2>Add a Hero</h2>
      <Formik
        initialValues={{ name: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          return errors;
        }}
        onSubmit={submitHero}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
