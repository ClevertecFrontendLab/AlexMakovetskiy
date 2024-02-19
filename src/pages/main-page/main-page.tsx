import { SiderElement, HeaderElement, PageContainer } from '@components/index';

import styles from "./main-page.module.css";

export function MainPage() {
    return (
        <>
            <SiderElement/>
            <div className={styles.mainWrap}>
                <HeaderElement/>
                <PageContainer/>
            </div>
        </>
    );
}