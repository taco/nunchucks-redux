import { createStore } from 'redux';
import products from './reducers/products';

export const store = createStore(products);
export default store;
