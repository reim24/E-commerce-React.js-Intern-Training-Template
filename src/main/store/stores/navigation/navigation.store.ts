import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const navigationStore = createSlice({
  name: 'navigation',
  initialState: null,
  reducers: {
    navigateTo(_state, action: PayloadAction<string>) {
      return action.payload;
    },
    invalidateNavigate() {
      return null;
    },
  },
});

export default navigationStore;

export const { navigateTo,invalidateNavigate } = navigationStore.actions;
