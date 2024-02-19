import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from "./main-layout.module.css";

export function MainLayout() {
    return (
        <Layout className={styles.layoutMain}>
            <Outlet />
        </Layout>
    );
}