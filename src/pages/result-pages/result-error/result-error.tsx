import { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CloseCircleFilled } from "@ant-design/icons";

import { history } from "@redux/configure-store";

import { Path } from "../../../services/router/routes";

import styles from "./result-error.module.css";

export function ResultErrorPage() {
    const isDirectLink = history.action === 'POP';

    useEffect(() => {
        if (isDirectLink) {
            history.push(Path.Signup);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <main className={styles.resultErrorPageWrap}>
            <div className={styles.resultErrorPageContainer}>
                <div className={styles.logoWrap}>
                    <CloseCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.resultErrorPageContainer__title} style={{ margin: "0px"}}>Данные не сохранились</h3>
                <p className={styles.resultErrorPageContainer__subtitle}>Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.</p>
                <Link to={Path.Signup}>
                    <Button 
                        type="primary" 
                        className={styles.resultErrorPageContainer__signupAction}
                    >Повторить</Button>
                </Link>
            </div>
        </main>
    );
}