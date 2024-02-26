import { SignupFieldData } from "../pages/auth";

export interface IToggleLoadingState {
	isShowLoadingElement: boolean;
}

export type IUserDataState = Required<SignupFieldData>;