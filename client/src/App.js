import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';

const API_URL = 'http://localhost:5000';

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

  const deleteHero = (id) => {
    // Send a DELETE request to remove a hero
    axios.delete(`${API_URL}/heroes/${id}`)
      .then(() => {
        // Remove the deleted hero from the heroes list
        setHeroes(heroes.filter((hero) => hero.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting hero:', error);
      });
  };

  return (
    <div>
      <h1>Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <strong>Name:</strong> {hero.name}<br />
            <strong>Power:</strong> {hero.power}<br />
            <strong>Strength:</strong> {hero.strength}<br />
            <button onClick={() => deleteHero(hero.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add a Hero</h2>
      <Formik
        initialValues={{ name: '', power: '', strength: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          // Add validation for power and strength if needed
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
            <label htmlFor="power">Power:</label>
            <Field type="text" id="power" name="power" />
            <ErrorMessage name="power" component="div" />
          </div>
          <div>
            <label htmlFor="strength">Strength:</label>
            <Field type="text" id="strength" name="strength" />
            <ErrorMessage name="strength" component="div" />
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
