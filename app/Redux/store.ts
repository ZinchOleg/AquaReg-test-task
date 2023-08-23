'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dmrDataReducer } from '@Redux/dmr-data/dmrDataSlice';
import { structuresDataReducer } from './structures-data/structuresDataSlice';
import { facilityDataReducer } from './facility-data/facilityDataSlice';

const rootReducer = combineReducers({
  dmrData: dmrDataReducer,
  structuresData: structuresDataReducer,
  facilityData: facilityDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];