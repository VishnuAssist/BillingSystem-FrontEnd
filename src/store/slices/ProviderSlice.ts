import { createSlice,  } from '@reduxjs/toolkit';
import type {  PayloadAction } from '@reduxjs/toolkit';
import type { ProviderType } from '../../Models/ProviderType';

interface ProviderState {
  providerList: ProviderType[];
  selectedProvider: ProviderType | null;
  searchTerm: string;
  villageFilter: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ProviderState = {
  providerList: [
    {
      id: 1,
      age: 30,
      userName: "ram",
      password: "ram@123",
      firstName: "Ram",
      lastName: "Sharma",
      email: "ram@example.com",
      dob: "1993-04-15",
      phoneNumber: "9876543210",
      village: "MilkVillage",
      taluk: "Taluk1",
      district: "DistrictA",
      pincode: 600001,
      cowCount: 10,
      aadharNumber: "123456789012",
      bankName: "State Bank",
      bankAccountNumber: "987654321012"
    },
    {
      id: 2,
      age: 35,
      userName: "sita",
      password: "sita@123",
      firstName: "Sita",
      lastName: "Verma",
      email: "sita@example.com",
      dob: "1988-09-20",
      phoneNumber: "9123456780",
      village: "DairyVillage",
      taluk: "Taluk2",
      district: "DistrictB",
      pincode: 600002,
      cowCount: 15,
      aadharNumber: "987654321098",
      bankName: "HDFC Bank",
      bankAccountNumber: "123456789098"
    }
  ],
  selectedProvider: null,
  searchTerm: '',
  villageFilter: 'all',
  currentPage: 1,
  itemsPerPage: 5
};

const ProviderSlice = createSlice({
  name: 'ProviderSlice',
  initialState,
  reducers: {
    addProvider: (state, action: PayloadAction<ProviderType>) => {
      const id = Math.random() * 100;
      const provider = { ...action.payload, id };
      state.providerList.push(provider);
    },
    removeProvider: (state, action: PayloadAction<{ id: number }>) => {
      state.providerList = state.providerList.filter(
        (provider) => provider.id !== action.payload.id
      );
    },
    updateProvider: (state, action: PayloadAction<ProviderType>) => {
      state.providerList = state.providerList.map((provider) =>
        provider.id === action.payload.id ? action.payload : provider
      );
    },
    setSelectedProvider: (state, action: PayloadAction<ProviderType | null>) => {
      state.selectedProvider = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setVillageFilter: (state, action: PayloadAction<string>) => {
      state.villageFilter = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    }
  }
});

export const {
  addProvider,
  removeProvider,
  updateProvider,
  setSelectedProvider,
  setSearchTerm,
  setVillageFilter,
  setCurrentPage,
  setItemsPerPage
} = ProviderSlice.actions;

export default ProviderSlice.reducer;
export type { ProviderState };