import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import IUser from '../../../interfaces/IUser';
import JwtManager from '../../../utils/jwtManager';
import { setUser } from './user.store';
import { navigateTo } from '../navigation/navigation.store';

const onRegister = (payload: IUser): AppThunk => async (dispatch) => {
  try {
    const response = await AuthManager.register({ ...payload });
    if (response?.token) {
      JwtManager.setAccessToken(response.token);
      dispatch(setUser(payload));
      dispatch(navigateTo('/'));
    }
  } catch (err: any) {
    Error(err.message);
  }
};

export default onRegister;
