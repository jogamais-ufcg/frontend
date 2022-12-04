/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const DEFAULT_ERROR_MESSAGE = 'Erro ao conectar com o servidor!';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface FetchOptions {
  data: unknown;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export async function fetchApi(url: string, options?: FetchOptions) {
  try {
    const response = await api({
      url,
      method: options?.method || 'GET',
      data: options?.data,
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error:
        (error?.response?.data?.message as string) || DEFAULT_ERROR_MESSAGE,
    };
  }
}
