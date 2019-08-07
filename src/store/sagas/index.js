import { all, fork } from 'redux-saga/effects';
import product from './product';
import RangeFiltr from './RangeFiltr';
import ColorFilter from './ColorFilter';
import AddTo from './AddTo';
import cart from './cart';
import clearCart from './clearCart';
import cartCaunt from './cartCount';
import find from './find'
import delCart from "./delCart";

export default function* watchers() {
  yield all([
    fork(product),
    fork(RangeFiltr),
    fork(ColorFilter),
    fork(AddTo),
    fork(cart),
    fork(clearCart),
    fork(cartCaunt),
    fork(delCart),
    fork(find)
  ]);
}
