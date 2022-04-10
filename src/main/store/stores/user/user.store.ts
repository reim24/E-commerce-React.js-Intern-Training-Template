import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../../interfaces/IUser';

const userStore = createSlice({
  name: 'user',
  initialState: null as IUser,
  reducers: {
    setUser(_state, action: PayloadAction<IUser>) {
      return {...action.payload, password:''};
    },
  },
});

export default userStore;

export const { setUser } = userStore.actions;
