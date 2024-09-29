import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortOption = 'popularity' | 'rating' | 'views' | 'chapters' | 'releaseDate' | 'updateDate' | 'addDate' | 'titleAZ';
export type SortOrder = 'desc' | 'asc';

export interface OrderItem {
   id: SortOrder;
   label: string;
   value: SortOrder;
}
export interface SortingItem {
   id: SortOption;
   label: string;
   value: SortOption;
}

interface ContentSortingState {
  sortOption: SortingItem;
  sortOrder: OrderItem;
}

const initialState: ContentSortingState = {
  sortOption: { id: 'popularity', label: 'За популярністю', value: 'popularity' },
  sortOrder: { id: 'desc', label: 'За спаданням', value: 'desc' },
};

const contentSortingSlice = createSlice({
  name: 'contentSorting',
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<SortingItem>) => {
      state.sortOption = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<OrderItem>) => {
      state.sortOrder = action.payload;
    },
    resetSorting: (state) => {
      state.sortOption = initialState.sortOption;
      state.sortOrder = initialState.sortOrder;
    },
  },
});

export const { setSortOption, setSortOrder, resetSorting } = contentSortingSlice.actions;

export default contentSortingSlice.reducer;