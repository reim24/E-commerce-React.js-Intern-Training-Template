import { combineReducers } from '@reduxjs/toolkit';
import userStore from '../stores/user/user.store';
import navigationStore from '../stores/navigation/navigation.store';
import search from '../stores/search/store.search';
import Cart from '../stores/cart/cart.store';
import modal from '../stores/modal/state.modal';




const rootReducer = combineReducers({
  user: userStore.reducer,
  navigation: navigationStore.reducer,
  cart: Cart.reducer,
  search: search.reducer,
  modal: modal.reducer
});

export default rootReducer;
