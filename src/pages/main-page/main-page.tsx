import { useEffect } from 'react';

import { history } from '@redux/configure-store';

import { SiderElement, HeaderElement, PageContainer } from '@components/index';
import { Path } from '../../services/router/routes';

import styles from "./main-page.module.css";

export function MainPage() {
    useEffect(() => {
        const accessToken = window.localStorage.getItem("accessToken");
        if(!accessToken) {
            history.push(Path.Login);
        }
    }, []);

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