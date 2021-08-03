import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice' 
import navReducer from './slices/navSlice' 

export const store = configureStore({
  reducer: {
    data: dataReducer,
    nav: navReducer
  }
});