import axiosInit from './axios';
import initStore from '../store/redux/initStore';
import AuthManager from '../utils/authManager';
import JwtManager from '../utils/jwtManager';

const initApp = async () => {

  await axiosInit();
  let currentUser = null;
  try {
    if (JwtManager.accessToken) {
      currentUser = await AuthManager.getUserFromToken(JwtManager.accessToken);
    }
  } catch (e) {
    console.log('JwtManager.accessToken')
  }

  const appStore = initStore(currentUser);
  return appStore;
};
export default initApp;


