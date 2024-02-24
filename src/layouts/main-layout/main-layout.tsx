import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from "./main-layout.module.css";
import "antd/dist/antd.css";

export function MainLayout() {
    return (
        <Layout className={styles.layoutMain} style={{background: "initial"}}>
            <Outlet />
        </Layout>
    );
}