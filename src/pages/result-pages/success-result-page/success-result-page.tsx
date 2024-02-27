import { Link } from "react-router-dom";
import { Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

import { history } from "@redux/configure-store";

import { Path } from "../../../services/router/routes";
import { nbsp } from "../../../helpers/common-constants";

import styles from "./success-result-page.module.css";
import { useEffect } from "react";

export function SuccessResultPage() {
    const isDirectLink = history.action === 'POP';

    useEffect(() => {
        if (isDirectLink) {
            history.push(Path.Signup);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.successResultPageWrap}>
            <div className={styles.successResultPageContainer}>
                <div className={styles.logoWrap}>
                    <CheckCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.successResultPageContainer__title} >Регистрация успешна</h3>
                <p className={styles.successResultPageContainer__subtitle}>Регистрация прошла успешно. Зайдите в{nbsp}приложение, используя свои e-mail и пароль.</p>
                <Link to={Path.Login}>
                    <Button 
                        type="primary" 
                        className={styles.successResultPageContainer__loginAction}
                    >Войти</Button>
                </Link>
            </div>
        </main>
    );
}