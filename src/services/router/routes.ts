export enum Path {
    MainPage = "/main",

    Login = "/auth", 
    Signup = "/auth/registration",
    RecoveryPassword = "/auth/confirm-email",

    SuccessResult = "/result/success",
    UserExistError = "/result/error-user-exist",
    ErrorResult = "/result/error",
    LoginErrorResult = "/result/error-login",
}