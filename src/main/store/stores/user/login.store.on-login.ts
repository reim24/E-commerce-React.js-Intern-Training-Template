import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import { navigateTo } from '../navigation/navigation.store';
import { setUser } from './user.store';
import ILoginRequest from '../../../interfaces/ILoginRequest';
import JwtManager from '../../../utils/jwtManager';

const onLogin = (payload: ILoginRequest): AppThunk => async (dispatch) => {
  try {
    const response = await AuthManager.loginWithCredentials({ ...payload });
    if (response.user && response.accessToken) {
      JwtManager.setAccessToken(response.accessToken);
      dispatch(setUser(response.user));
      dispatch(navigateTo('/'));
    }
  } catch (err: any) {
    Error(err.message);
  }
};

export default onLogin;
