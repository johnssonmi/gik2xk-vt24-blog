import axios from './api';

export async function getAll(endpoint = '/posts') {
  const response = await axios.get(endpoint);

  if (response.status === 200) return response.data;
  else {
    console.log(response);
    return [];
  }
}
