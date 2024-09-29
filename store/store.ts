import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import contentSortingReducer from "./features/content-sorting/contentSortingSlice";
export const store = configureStore({
   reducer: combineReducers({
      theme: themeReducer,
      contentSorting: contentSortingReducer
   })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;