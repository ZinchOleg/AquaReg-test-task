import { createSlice } from '@reduxjs/toolkit';

export interface IStructuresDataTankInfo {
  numberOfSettingTank: number;
  settingTankArea: number;
  numberOfProcessTanks: number;
  processTankArea: number;
  coolingTowers: number;
  id: number;
}

interface IStructuresDataSlice {
  tanksInfo: IStructuresDataTankInfo[];
}

const initialState: IStructuresDataSlice = {
  tanksInfo: [
    {
      id: 1,
      numberOfSettingTank: 1,
      settingTankArea: 100,
      numberOfProcessTanks: 1,
      processTankArea: 0,
      coolingTowers: 100,
    },
    {
      id: 2,
      numberOfSettingTank: 2,
      settingTankArea: 200,
      numberOfProcessTanks: 1,
      processTankArea: 0,
      coolingTowers: 200,
    },
    {
      id: 3,
      numberOfSettingTank: 3,
      settingTankArea: 300,
      numberOfProcessTanks: 1,
      processTankArea: 0,
      coolingTowers: 300,
    },
    {
      id: 4,
      numberOfSettingTank: 1,
      settingTankArea: 100,
      numberOfProcessTanks: 1,
      processTankArea: 0,
      coolingTowers: 100,
    },
    {
      id: 5,
      numberOfSettingTank: 1,
      settingTankArea: 100,
      numberOfProcessTanks: 1,
      processTankArea: 0,
      coolingTowers: 100,
    },
  ]
};

const structuresDataSlice = createSlice({
  name: 'structuresData',
  initialState,
  reducers: {

  }
});

export const {
  reducer: structuresDataReducer,
  actions: structuresDataActions,
} = structuresDataSlice;