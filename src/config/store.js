import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../Product/reducers';

export default configureStore({
  reducer: {
    products: productReducers
  }
});
