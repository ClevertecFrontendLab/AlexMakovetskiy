import { RootState } from "@redux/configure-store";

const toggleLoadingSelector = (state: RootState) => {
	return state.ToggleLoadingSlice;
};

export default toggleLoadingSelector;