import { AuthApi } from '@api';
import session from '@root/config/session.instance';
import { TokenPair } from '@root/SessionManager';
import { AxiosError } from 'axios';
import { ServiceResponse } from './ServiceResponse.interface';

export class AuthService {
  constructor(private readonly authApi = new AuthApi()) {}

  public async login(email: string, password: string): Promise<ServiceResponse> {
    try {
      const tokens: TokenPair = await this.authApi.login({ email, password });
      session.setSession(tokens);

      return {
        hasSucceeded: true,
        message: 'Login successful'
      };
    } catch (error) {
      return {
        hasSucceeded: false,
        message: (error as AxiosError).response?.data.message
      };
    }
  }
}
