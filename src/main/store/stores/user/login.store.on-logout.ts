import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import { navigateTo } from '../navigation/navigation.store';
import { setUser } from './user.store';

const onLogout = (): AppThunk => async (dispatch) => {
  dispatch(setUser(null));
  AuthManager.logout();
  dispatch(navigateTo('/login'));
};

export default onLogout;
