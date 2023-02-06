/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import * as storage from 'services/storage';

const DEFAULT_ERROR_MESSAGE = 'Erro ao conectar com o servidor!';

const api = axios.create({
  baseURL: 'https://4bb1-2804-18-7016-131f-a377-d94-854b-59af.sa.ngrok.io',
});

api.interceptors.request.use(async (config) => {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

interface FetchOptions {
  data?: unknown;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: AxiosRequestConfig['params'];
  isUrlEncoded?: boolean;
}

export async function fetchApi(url: string, options?: FetchOptions) {
  let contentType =
    options?.data instanceof FormData
      ? 'multipart/form-data'
      : 'application/json';

  if (options?.isUrlEncoded) {
    contentType = 'application/x-www-form-urlencoded';
  }

  try {
    const response = await api({
      url,
      method: options?.method || 'GET',
      data: options?.data,
      params: options?.params,
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
