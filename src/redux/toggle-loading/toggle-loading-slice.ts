import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IToggleLoadingState } from "../../types/redux/store-types";

const toggleLoadingState: IToggleLoadingState = {
	isShowLoadingElement: false,
};

const ToggleLoadingSlice = createSlice({
    name: "toggleLoading",
    initialState: toggleLoadingState,
    reducers: {
        setToggleLoadingState: (state: IToggleLoadingState, action: PayloadAction<boolean>) => {
            state.isShowLoadingElement = action.payload;
        }
    }
});

export const { setToggleLoadingState } = ToggleLoadingSlice.actions;
export default ToggleLoadingSlice.reducer;