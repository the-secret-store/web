import { LoginDto, RegisterDto } from '@dtos';
import { instance } from '@root/config/axios.config';
import { TokenPair } from '@root/AuthEngine/SessionManager';
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

  public async register(details: RegisterDto): Promise<string> {
    const { data }: ApiResponse = await this.axiosInstance.post(
      '/user/register',
      details
    );
    return data.message;
  }
}
