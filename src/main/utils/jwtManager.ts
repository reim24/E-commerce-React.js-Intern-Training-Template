import AppStorageManager from './appStorageManager';

class JwtManager {
  private static access_token = 'access_token';

  public static get accessToken(): string | null {
    return AppStorageManager.getItem(JwtManager.access_token);
  }


  static setAccessToken(t: string | null): void {
    if (t) {
      AppStorageManager.setItem(JwtManager.access_token, t);
    } else {
      AppStorageManager.removeItem(JwtManager.access_token);
    }
  }

  static clearToken() {
    AppStorageManager.removeItem(JwtManager.access_token);
  }

}

export default JwtManager;
