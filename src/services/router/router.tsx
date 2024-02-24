import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout, AuthLayout } from "../../layouts/index"
import { Path } from "./routes"
import { LoginPage, MainPage } from "@pages/index"

export const router = (
    <Routes>
        <Route path="/" element={<Navigate to={Path.Login} />} />
        <Route element={<AuthLayout />}>
            <Route index path={Path.Login} element={<LoginPage />} />
        </Route>
        <Route element={<MainLayout />}>
            <Route path={Path.MainPage} element={<MainPage />} />
        </Route>
    </Routes>
);