import axios from 'axios';
import session from './session.instance';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http:127.0.0.1:3000'
    : 'https://yet-to-publish.io';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: session.isAuthorized()
    ? {
        Authorization: `Bearer ${session.getAuthToken()}`
      }
    : {}
});
