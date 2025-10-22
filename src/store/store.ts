import { configureStore } from "@reduxjs/toolkit"

import loginReducer from "./slices/loginSlice"
import uiReducer from "./slices/uiSlice"
import providerReducer from "./slices/ProviderSlice"


export const store = configureStore({
  
  reducer: {
    login: loginReducer,
    ui: uiReducer,
Provider:providerReducer,

     
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
