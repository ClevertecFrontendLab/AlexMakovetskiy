import { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CloseCircleFilled } from "@ant-design/icons";

import { history } from "@redux/configure-store";

import { Path } from "../../../services/router/routes";

import styles from "./user-exist-error-page.module.css";

export function UserExistErrorPage() {
    const isDirectLink = history.action === 'POP';

    useEffect(() => {
        if (isDirectLink) {
            history.push(Path.Signup);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className={styles.userExistErrorPageWrap}>
            <div className={styles.userExistErrorPageContainer}>
                <div className={styles.logoWrap}>
                    <CloseCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.userExistErrorPageContainer__title} style={{ margin: "0px"}}>Данные не сохранились</h3>
                <p className={styles.userExistErrorPageContainer__subtitle}>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.</p>
                <Link to={Path.Signup}>
                    <Button 
                        type="primary" 
                        className={styles.userExistErrorPageContainer__signupAction}
                    >Назад к регистрации</Button>
                </Link>
            </div>
        </main>
    );
}