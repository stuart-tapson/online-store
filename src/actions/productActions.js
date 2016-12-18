import * as types from './actionTypes';
import ProductApi from '../api/mockProductApi';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
