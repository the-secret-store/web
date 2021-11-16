import { SessionManager } from '@root/AuthEngine/SessionManager';
import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5000'
    : 'https://yet-to-publish.io';

const AUTH_TOKEN = JSON.parse(
  localStorage.getItem(SessionManager.getStorageKey()) || '{}'
)?.tokens?.authToken;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: !!AUTH_TOKEN
    ? {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    : {}
});
