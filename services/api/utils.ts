/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const DEFAULT_ERROR_MESSAGE = 'Erro ao conectar com o servidor!';

const api = axios.create({
  baseURL: 'https://icy-glade-2080.fly.dev',
});

interface FetchOptions {
  data: unknown;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export async function fetchApi(url: string, options?: FetchOptions) {
  const contentType =
    options?.data instanceof FormData
      ? 'multipart/form-data'
      : 'application/json';

  try {
    const response = await api({
      url,
      method: options?.method || 'GET',
      data: options?.data,
      headers: {
        'Content-Type': contentType,
      },
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error:
        (error?.response?.data?.errorMessage as string) ||
        DEFAULT_ERROR_MESSAGE,
    };
  }
}
