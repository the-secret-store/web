import jwt from 'jsonwebtoken';

export type TokenPair = {
  authToken: string;
  refreshToken: string;
};

type Store = {
  displayName: string;
  tokens: TokenPair;
  id: string;
  email: string;
};

type Payload = {
  display_name: string;
  id: string;
  email: string;
};

export class SessionManager {
  private static readonly STORAGE_KEY = 'the-secret-store';

  private static readonly getStorage = (): Store =>
    JSON.parse(window.localStorage.getItem(SessionManager.STORAGE_KEY) || '{}');

  private static readonly setStorage = (value: Store) =>
    window.localStorage.setItem(SessionManager.STORAGE_KEY, JSON.stringify(value));

  constructor(private store: Store = SessionManager.getStorage()) {}

  public setSession(tokens: TokenPair): void {
    // !the typecasting could be a problem
    const { display_name, id, email } = <Payload>jwt.decode(tokens.authToken);
    this.store = { tokens, displayName: display_name, id, email };
    SessionManager.setStorage(this.store);
  }

  public updateTokens(tokens: TokenPair): void {
    this.store.tokens = tokens;
    SessionManager.setStorage(this.store);
  }

  public getAuthToken(): string {
    return this.store.tokens.authToken;
  }

  public getRefreshToken(): string {
    return this.store.tokens.refreshToken;
  }

  public getDisplayName(): string {
    return this.store.displayName;
  }

  public getUserId(): string {
    return this.store.id;
  }

  public getEmail(): string {
    return this.store.email;
  }
}
