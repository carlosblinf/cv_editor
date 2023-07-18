import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Builder from "@/components/Builder";
import { InfoComponent } from "@/utils/types";
import { info } from "@/utils/data";

export interface BuilderState {
  components: InfoComponent[];
  force: number;
}

const initialState: BuilderState = {
  components: info.components,
  force: 0,
};

export const BuilderSlice = createSlice({
  name: "Builder",
  initialState,
  reducers: {
    updateInfo: (state: BuilderState, action: PayloadAction<InfoComponent>) => {
      const item = action.payload;
      const targetIndex = state.components.findIndex(
        (elem) => elem?.type === item.type
      );
      state.components[targetIndex] = item;
      state.force++;
    },
    // increment: (state: BuilderState, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { updateInfo } = BuilderSlice.actions;
export default BuilderSlice.reducer;
