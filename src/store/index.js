import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import categoryReducer from '@slices/category/Slice';
import comapanyReducer from '@slices/company/Slice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    companies: comapanyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
  devTools: true,
});

export default store;