import { Layout } from 'antd';

import { SiderComponent, Header, PageContainer } from '@components/index';

import styles from "./main-page.module.css";

export function MainPage() {
    return (
        <Layout className={styles.layoutMain}>
            <SiderComponent/>
            <div className={styles.mainWrap}>
                <Header/>
                <PageContainer/>
            </div>
        </Layout>
    );
}