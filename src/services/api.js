import axios from 'axios';

axios.defaults.baseURL = 'https://64b7c4a121b9aa6eb078fe04.mockapi.io';

export const addMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
}

export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
}

export const deleteMaterial = async (id) => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
}

export const updateMaterial = async (update) => {
    const response = await axios.put(`/materials/${update.id}`);
    return response.data;
}