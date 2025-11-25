import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

interface InfoType {
  infoTitle: string;
  infoDescription: string;
  infoInformer: string;
}
interface InfoState {
  InfoList: InfoType[];
  searchTerm :string;
  currentPage :number;
  itemsPerPage:number;
}
const initialState: InfoState = {
  InfoList: [
    {
      infoTitle: "vishnu",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "naga",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "vishnu",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "naga",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "vishnu",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "naga",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "vishnu",
      infoDescription: "sri",
      infoInformer: "f",
    },
    {
      infoTitle: "naga",
      infoDescription: "sri",
      infoInformer: "f",
    },
  ],
  searchTerm: "",
  currentPage : 1,
  itemsPerPage :5
};
const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState,
  reducers: {
    addInfo: (state, action: PayloadAction<InfoType>) => {
      const id = Math.random() * 100;
      const info = { ...action.payload, id };
      state.InfoList.push(info);
    },
    removeInfo: (state, action: PayloadAction<{ id: number }>) => {
      state.InfoList = state.InfoList.filter(
        (info) => info.id !== action.payload.id
      );
    },
    updateInfo: (state, action: PayloadAction<InfoType>) => {
      state.InfoList = state.InfoList.map((info) =>
        info.id === action.payload.id ? action.payload : Provider
      );
    },
    setInfoSearch :(state ,action:PayloadAction<string>)=>{
      state.searchTerm =action.payload
    },
    setCurrentPage :(state,action:PayloadAction<number>)=>{
      state.currentPage = action.payload
    },
    setItemsPerPage :(state,action:PayloadAction<number>)=>{
      state.itemsPerPage = action.payload
    },
  },
});

export const { addInfo, removeInfo, updateInfo ,setInfoSearch,setCurrentPage,setItemsPerPage} = InfoSlice.actions;
export default InfoSlice.reducer;
