import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "../../layouts/index"
import { Path } from "./routes"
import { MainPage } from "@pages/index"

export const router = (
    <Routes>
        <Route element={<MainLayout />}>
            <Route index path={Path.MainPage} element={<MainPage />} />
            <Route path="/" element={<Navigate to={Path.MainPage} />} />
        </Route>
    </Routes>
);