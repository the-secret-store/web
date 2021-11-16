import decodeJwt from 'jwt-decode';

export type TokenPair = {
  authToken: string;
  refreshToken: string;
};

type Store = {
  displayName: string;
  tokens: TokenPair;
  id: string;
  email: string;
  verificationStatus: 'verified' | 'unverified';
};

type Payload = {
  display_name: string;
  id: string;
  email: string;
  unverified?: boolean;
};

export class SessionManager {
  private static readonly STORAGE_KEY = 'the-secret-store';

  public static getStorageKey() {
    return SessionManager.STORAGE_KEY;
  }

  private static readonly getStorage = (): Store =>
    JSON.parse(window.localStorage.getItem(SessionManager.STORAGE_KEY) || '{}');

  private static readonly setStorage = (value: Store) =>
    window.localStorage.setItem(SessionManager.STORAGE_KEY, JSON.stringify(value));

  constructor(private store: Store = SessionManager.getStorage()) {}

  public isAuthenticated(): boolean {
    return !!this.store?.tokens?.authToken;
  }

  public isVerified(): boolean {
    return this.store.verificationStatus === 'verified';
  }

  public setSession(tokens: TokenPair): void {
    const { display_name, id, email, unverified } = <Payload>(
      decodeJwt(tokens.authToken)
    );
    this.store = {
      tokens,
      displayName: display_name,
      id,
      email,
      verificationStatus: unverified ? 'unverified' : 'verified'
    };
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
