import { combineReducers } from 'redux';

import purchase from './purchase/reducer';
import wishlist from './wishlist/reducer';

export default combineReducers({
  purchase,
  wishlist,
});
