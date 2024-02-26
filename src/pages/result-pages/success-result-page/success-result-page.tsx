import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

import { Path } from "../../../services/router/routes";
import { nbsp } from "../../../helpers/common-constants";

import styles from "./success-result-page.module.css";

export function SuccessResultPage() {
    const navigator = useNavigate();

    return (
        <main className={styles.successResultPageWrap}>
            <div className={styles.successResultPageContainer}>
                <div className={styles.logoWrap}>
                    <CheckCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.successResultPageContainer__title} >Регистрация успешна</h3>
                <p className={styles.successResultPageContainer__subtitle}>Регистрация прошла успешно. Зайдите в{nbsp}приложение, используя свои e-mail и пароль.</p>
                <Button 
                    type="primary" 
                    className={styles.successResultPageContainer__loginAction}
                    onClick={() => navigator(Path.Login)}
                >Войти</Button>
            </div>
        </main>
    );
}