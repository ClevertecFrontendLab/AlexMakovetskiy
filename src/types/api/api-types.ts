import { LoginFieldType, SignupFieldData } from "../../types/pages/auth";

export type SignupRequestData = Omit<SignupFieldData, "confirmPassword">;

export type LoginRequestData = Omit<LoginFieldType, "remember">;

export type AccessData = {
    accessToken: string;
}