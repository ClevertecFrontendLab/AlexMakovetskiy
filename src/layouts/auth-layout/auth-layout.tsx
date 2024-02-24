import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import styles from "./auth-layout.module.css";
import "antd/dist/antd.css";

export function AuthLayout() {
    return (
        <Layout className={styles.authLayout} style={{background: "initial"}}> 
            <Outlet />
        </Layout>
    );
}