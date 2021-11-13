import { TokenPair } from '@root/SessionManager';
import { AxiosError, AxiosResponse } from 'axios';

export interface ApiResponse
  extends AxiosResponse<{
    message: string;
    data?: any;
    tokens?: TokenPair; // Only for login req
  }> {}

export interface ApiErrorResponse
  extends AxiosError<{
    message: string;
    details?: any;
  }> {}
