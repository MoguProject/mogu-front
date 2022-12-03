import axios, { AxiosRequestConfig } from 'axios';
import { backUrl } from 'config/config';

interface User {
  token: string;
}

export function getJWTHeader(token: string | null): Record<string, string> {
  return { Authorization: `Bearer ${token}` };
}

const config: AxiosRequestConfig = { baseURL: backUrl };
export const axiosInstance = axios.create(config);
