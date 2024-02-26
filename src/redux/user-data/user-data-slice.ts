import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserDataState } from "../../types/redux/store-types";

const userDataState: IUserDataState = {
    email: "",
    password: "",
    confirmPassword: ""
}

const UserDataSlice = createSlice({
    name: "userData",
    initialState: userDataState,
    reducers: {
        setUserDataState: (state: IUserDataState, action: PayloadAction<IUserDataState>) => {
            state = action.payload;
        },
        setInitialUserDataState: (state: IUserDataState) => {
            state.email = userDataState.email;
            state.password = userDataState.password;
            state.confirmPassword = userDataState.confirmPassword;
        }
    }
});

export const {setUserDataState, setInitialUserDataState} = UserDataSlice.actions;
export default UserDataSlice.reducer;