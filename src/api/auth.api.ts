import { LoginDto } from '@dtos';
import { instance } from '@root/config/axios.config';
import { TokenPair } from '@root/SessionManager';
import { ApiResponse } from './ApiResponse.interface';

export class AuthApi {
  constructor(private readonly axiosInstance = instance) {}

  public async login(credentials: LoginDto): Promise<TokenPair> {
    const res: ApiResponse = await this.axiosInstance.post(
      '/auth/login',
      credentials
    );

    const { tokens } = res.data;

    return tokens!;
  }
}
