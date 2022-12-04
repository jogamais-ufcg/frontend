import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function fetchApi(
  url: string,
  method: 'GET' | 'PUT' | 'POST',
  data?: unknown
) {
  try {
    const response = await api({
      url,
      method,
      data,
    });

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
