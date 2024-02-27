import { Link } from "react-router-dom";
import { Button } from "antd";
import { WarningFilled } from "@ant-design/icons";
import { Path } from "../../../services/router/routes";

import { history } from "@redux/configure-store";

import styles from "./result-error-login.module.css";
import { useEffect } from "react";

export function ResultErrorLogin() {
    const isDirectLink = history.action === 'POP';

    useEffect(() => {
        if (isDirectLink) {
            history.push(Path.Login);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.resultErrorLoginWrap}>
            <div className={styles.resultErrorLoginContainer}>
                <div className={styles.logoWrap}>
                    <WarningFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.resultErrorLoginContainer__title} style={{ margin: "0px"}}>Вход не выполнен</h3>
                <p className={styles.resultErrorLoginContainer__subtitle}>Что-то пошло не так. Попробуйте еще раз</p>
                <Link to={Path.Login}>
                    <Button 
                        type="primary" 
                        className={styles.resultErrorLoginContainer__signupAction}
                    >Повторить</Button>
                </Link>
            </div>
        </main>
    );
}