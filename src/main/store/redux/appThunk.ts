import { Action, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export type AppThunk = ThunkAction<void, ReturnType<typeof rootReducer>, null, Action<string>>;
