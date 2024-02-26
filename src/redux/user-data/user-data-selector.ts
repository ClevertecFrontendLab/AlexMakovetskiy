import { RootState } from "@redux/configure-store";

const userDataSelector = (state: RootState) => {
	return state.userDataSlice;
};

export default userDataSelector;