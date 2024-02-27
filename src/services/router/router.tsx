import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout, AuthLayout } from "../../layouts/index"
import { Path } from "./routes"
import { 
    LoginPage, 
    MainPage, 
    RecoveryPassword, 
    ResultErrorLogin, 
    ResultErrorPage, 
    SignupPage, 
    SuccessResultPage, 
    UserExistErrorPage 
} from "@pages/index"

export const router = (
    <Routes>
        <Route path="/" element={<Navigate to={Path.Login} />} />
        <Route element={<AuthLayout />}>
            <Route index path={Path.Login} element={<LoginPage />} />
            <Route path={Path.Signup} element={<SignupPage />} />
            <Route path={Path.RecoveryPassword} element={<RecoveryPassword />} />
            <Route path={Path.SuccessResult} element={<SuccessResultPage />} />
            <Route path={Path.UserExistError} element={<UserExistErrorPage />} />
            <Route path={Path.ErrorResult} element={<ResultErrorPage />} />
            <Route path={Path.LoginErrorResult} element={<ResultErrorLogin />} />
        </Route>
        <Route element={<MainLayout />}>
            <Route path={Path.MainPage} element={<MainPage />} />
        </Route>
    </Routes>
);