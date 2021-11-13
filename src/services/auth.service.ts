import { ApiErrorResponse, AuthApi } from '@api';
import session from '@root/config/session.instance';
import { TokenPair } from '@root/SessionManager';
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
        message: (error as ApiErrorResponse).response?.data.message!
      };
    }
  }

  public async register(
    display_name: string,
    email: string,
    password: string
  ): Promise<ServiceResponse> {
    try {
      const message = await this.authApi.register({ display_name, email, password });
      return {
        hasSucceeded: true,
        message
      };
    } catch (error) {
      return {
        hasSucceeded: false,
        message: (error as ApiErrorResponse).response?.data.message!
      };
    }
  }
}
