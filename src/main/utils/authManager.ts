import JwtManager from './jwtManager';
import IUser from '../interfaces/IUser';
import ILoginRequest from '../interfaces/ILoginRequest';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export interface IUserInfo {
  user: IUser;
  accessToken: string;
}

class AuthManager {

  static get token(): string | null {
    return JwtManager.accessToken;
  }

  static async getUserFromToken(token: string): Promise<IUser> {
    let userInfo: IUser = null;
    debugger
    try {
      let userId = (jwt_decode(token) as any).sub;
      let result = await (await axios.get(`users/${userId}`)).data;

      userInfo = result;
    } catch (e) {
      throw e;
    }
    return userInfo;
  }

  static async getTokenWithCredentials(payload: ILoginRequest): Promise<IUserInfo> {

    const { data } = await axios.post('login', payload);

    const responseLogin: IUserInfo = {
      user: data?.user,
      accessToken: data?.accessToken
    };
    return responseLogin;
  }

  static async loginWithCredentials(credentials: ILoginRequest): Promise<IUserInfo> {
    const response = await AuthManager.getTokenWithCredentials(credentials);
    return response;
  }

  static async register(user: IUser): Promise<any> {
    const { data } = await axios.post('register', user);
    return data;
  }
  static logout() {
    JwtManager.clearToken();
  }
}

export default AuthManager;
