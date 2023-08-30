import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contsctsSlice';
import { filterReducer } from './slices/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
