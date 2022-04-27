import JwtManager from './jwtManager';
import IUser from '../interfaces/IUser';
import ILoginRequest from '../interfaces/ILoginRequest';
import axios from 'axios';

export interface IUserInfo {
  user: IUser;
  token: string;
}

class AuthManager {

  static get token(): string | null {
    return JwtManager.accessToken;
  }

  static async getUserFromToken(token:string): Promise<IUser> {
    let userInfo: IUser = null;
debugger
      try {
        let result = await (await axios.get(`authentication/validate-token?token=${token}`)).data;
        userInfo = result;
      } catch (e) {
        throw e;
      }
    return userInfo;
  }

  static async getTokenWithCredentials(payload: ILoginRequest): Promise<IUserInfo> {

    const { data }  = await axios.post('authentication/login',payload);
    const user  = await AuthManager.getUserFromToken(data.token);
    
    const responseLogin: IUserInfo = {
      user: user,
      token: data?.token
    };

    if (responseLogin?.token) {
      JwtManager.setAccessToken(responseLogin.token);
    }

    return responseLogin;
  }

  static async loginWithCredentials(credentials: ILoginRequest): Promise<IUserInfo> {
    const response = await AuthManager.getTokenWithCredentials(credentials);
    return response;
  }

  static async register(user: IUser): Promise<void> {
    const { data }  = await axios.post('authentication/register',user);
    if (data?.token) {
      JwtManager.setAccessToken(data.token);
      window.location.pathname='/';
    }
  }
  static logout() {
    JwtManager.clearToken();
  }
}

export default AuthManager;
