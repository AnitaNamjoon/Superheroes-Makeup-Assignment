import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

export const getHeroes = () => axios.get(`${API_BASE_URL}/heroes`);
export const getHeroById = (id) => axios.get(`${API_BASE_URL}/heroes/${id}`);
export const getPowers = () => axios.get(`${API_BASE_URL}/powers`);
export const getPowerById = (id) => axios.get(`${API_BASE_URL}/powers/${id}`);
export const addHero = (data) => axios.post(`${API_BASE_URL}/heroes`, data);
