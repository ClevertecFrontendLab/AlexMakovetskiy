import { Layout } from 'antd';

import { SiderElement, HeaderElement, PageContainer } from '@components/index';

import styles from "./main-page.module.css";

export function MainPage() {
    return (
        <Layout className={styles.layoutMain}>
            <SiderElement/>
            <div className={styles.mainWrap}>
                <HeaderElement/>
                <PageContainer/>
            </div>
        </Layout>
    );
}