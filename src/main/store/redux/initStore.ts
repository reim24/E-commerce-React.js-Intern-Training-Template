import { configureStore, current } from '@reduxjs/toolkit';
import IUser from '../../interfaces/IUser';
import { setUser } from '../stores/user/user.store';
import rootReducer from './rootReducer';

const initStore = (currentUser:IUser) => {
  const appStore = configureStore({
    reducer: rootReducer,
  });
  if(currentUser)
      appStore.dispatch(setUser(currentUser));
  return appStore;
};

export default initStore;
