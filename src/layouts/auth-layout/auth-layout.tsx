import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@hooks/typed-react-redux-hooks";

import { LoadingElement } from "@components/loading-element/loading-element";
import toggleLoadingSelector from "@redux/toggle-loading/toggle-loading-selector";

import styles from "./auth-layout.module.css";
import "antd/dist/antd.css";

export function AuthLayout() {
    const isShowLoadingElement = useAppSelector(toggleLoadingSelector).isShowLoadingElement;

    return (
        <Layout className={styles.authLayout} style={{background: "initial"}}> 
            <Outlet />
            {
                isShowLoadingElement && <LoadingElement />
            }
        </Layout>
    );
}