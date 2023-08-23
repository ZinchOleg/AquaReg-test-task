import { createSlice } from '@reduxjs/toolkit';

export interface IDmrDataArrayItem {
  limit_value_nmbr: number;
  reported_value: number;
  reported_date: string;
  unit: string;
  past_six_month_violation: 'No' | 'Yes';
  notes: string;
  id: number;
}

interface IDmrDataSlice {
  dmrDataArray: IDmrDataArrayItem[];
}

const initialState: IDmrDataSlice = {
  dmrDataArray: [
    {
      id: 1,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 2,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 3,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 4,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 5,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 6,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 7,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
    {
      id: 8,
      limit_value_nmbr: 8.5,
      notes: 'Not measured',
      past_six_month_violation: 'No',
      reported_date: '01.01.2023',
      reported_value: 8.5,
      unit: 'mg/L'
    },
  ]
};

const dmrDataSlice = createSlice({
  name: 'DmrData',
  initialState,
  reducers: {

  }
});

export const {
  reducer: dmrDataReducer,
  actions: dmrDataActions,
} = dmrDataSlice;