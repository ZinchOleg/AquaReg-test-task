import { createSlice } from '@reduxjs/toolkit';

export interface IFacilityData {
  facilityName: string;
  street: string;
  city: string;
  zip: number;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

const initialState: IFacilityData = {
  city: 'Cullman',
  country: 'US',
  facilityName: 'South Yard',
  latitude: 34.137583,
  longitude: -86.821861,
  state: 'AL',
  street: '11251 Highway 31 S',
  zip: 35055,
};

const facilityDataSlice = createSlice({
  name: 'facilityData',
  initialState,
  reducers: {

  }
});

export const {
  reducer: facilityDataReducer,
  actions: facilityDataActions,
} = facilityDataSlice;