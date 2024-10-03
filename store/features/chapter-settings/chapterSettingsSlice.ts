import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChapterSettingsState {
   fontSize: number;
   lineHeight: number;
   fontFamily: string;
   textAlign: string;
   containerWidth: number;
   paragraphSpacing: number;
}

const initialState: ChapterSettingsState = {
   fontSize: 1.1,
   lineHeight: 1.3,
   fontFamily: 'Inter',
   textAlign: 'justify',
   containerWidth: 100,
   paragraphSpacing: 1.3,
};

const chapterSettingsSlice = createSlice({
   name: 'chapterSettings',
   initialState,
   reducers: {
      setFontSize: (state, action: PayloadAction<number>) => {
         state.fontSize = action.payload;
      },
      setLineHeight: (state, action: PayloadAction<number>) => {
         state.lineHeight = action.payload;
      },
      setFontFamily: (state, action: PayloadAction<string>) => {
         state.fontFamily = action.payload;
      },
      setTextAlign: (state, action: PayloadAction<string>) => {
         state.textAlign = action.payload;
      }, 
      setContainerWidth: (state, action: PayloadAction<number>) => {
         state.containerWidth = action.payload;
      },
      setParagraphSpacing: (state, action: PayloadAction<number>) => {
         state.paragraphSpacing = action.payload;
      },
   },
});

export const { setFontSize, setLineHeight, setFontFamily, setTextAlign, setContainerWidth, setParagraphSpacing } = chapterSettingsSlice.actions;
export default chapterSettingsSlice.reducer;
