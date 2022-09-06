import { configureStore } from '@reduxjs/toolkit';
import UserDataSlice from './CounterSlice';

export const Store = configureStore({
  reducer: {
    userData: UserDataSlice
  },
})
