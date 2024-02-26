import { RuleObject } from "antd/lib/form";

export interface LoginFieldType {
    username?: string;
    password?: string;
    remember?: string;
}

export interface SignupFieldData {
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export interface IConfirmPasswordValidatorValue {
    password: string;
    confirmPassword: string;
}

export type TConfirmPasswordValidator = (_rule: RuleObject, value: IConfirmPasswordValidatorValue) => Promise<void>