import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import contentSortingReducer from "./features/content-sorting/contentSortingSlice";
import chapterSettingsReducer from "./features/chapter-settings/chapterSettingsSlice";

export const store = configureStore({
   reducer: combineReducers({
      theme: themeReducer,
      contentSorting: contentSortingReducer,
      chapterSettings: chapterSettingsReducer
   })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;