import { combineReducers } from 'redux';
import product from './product';
import RangeFiltr from './RangeFiltr';
import ColorFilter from './ColorFilter';
import AddTo from './AddTo';
import cart from './cart';
import clearCart from './clearCart';
import cartCaunt from "./cartCaunt";
import find from './find'
import delCart from "./delCart";
export default combineReducers({
  product,
  RangeFiltr,
  ColorFilter,
  AddTo,
  cart,
  clearCart,
  cartCaunt,
  find,
  delCart
});
