import { combineReducers } from '@reduxjs/toolkit';
import userStore from '../stores/user/user.store';
import navigationStore from '../stores/navigation/navigation.store';
import Cart from '../stores/cart/cart.store';


const rootReducer = combineReducers({
  user: userStore.reducer,
  navigation: navigationStore.reducer,
  cart: Cart.reducer,
});

export default rootReducer;
