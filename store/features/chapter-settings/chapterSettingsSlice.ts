import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChapterSettingsState {
   fontSize: number;
   lineHeight: number;
   fontFamily: string;
   textAlignLeft: boolean;
   containerWidth: number;
   abstractSpacing: boolean;
   paragraphSpacing: number;
}

const initialState: ChapterSettingsState = {
   fontSize: 14,
   lineHeight: 1.3,
   fontFamily: 'Inter',
   textAlignLeft: false,
   abstractSpacing: false,
   containerWidth: 66,
   paragraphSpacing: 16,
};

const chapterSettingsSlice = createSlice({
   name: 'chapterSettings',
   initialState,
   reducers: {
      setFontSize: (state, action: PayloadAction<number>) => {
         state.fontSize = action.payload;
      },
      setAbstractSpacing: (state, action: PayloadAction<boolean>) => {
         state.abstractSpacing = action.payload;
      },
      setLineHeight: (state, action: PayloadAction<number>) => {
         state.lineHeight = action.payload;
      },
      setFontFamily: (state, action: PayloadAction<string>) => {
         state.fontFamily = action.payload;
      },
      setTextAlign: (state, action: PayloadAction<boolean>) => {
         state.textAlignLeft = action.payload;
      }, 
      setContainerWidth: (state, action: PayloadAction<number>) => {
         state.containerWidth = action.payload;
      },
      setParagraphSpacing: (state, action: PayloadAction<number>) => {
         state.paragraphSpacing = action.payload;
      },
   },
});

export const { setFontSize, setAbstractSpacing, setLineHeight, setFontFamily, setTextAlign, setContainerWidth, setParagraphSpacing } = chapterSettingsSlice.actions;
export default chapterSettingsSlice.reducer;
