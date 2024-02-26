import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CloseCircleFilled } from "@ant-design/icons";

import { Path } from "../../../services/router/routes";

import styles from "./user-exist-error-page.module.css";

export function UserExistErrorPage() {
    const navigator = useNavigate();

    return (
        <main className={styles.userExistErrorPageWrap}>
            <div className={styles.userExistErrorPageContainer}>
                <div className={styles.logoWrap}>
                    <CloseCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.userExistErrorPageContainer__title} style={{ margin: "0px"}}>Данные не сохранились</h3>
                <p className={styles.userExistErrorPageContainer__subtitle}>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.</p>
                <Button 
                    type="primary" 
                    className={styles.userExistErrorPageContainer__signupAction}
                    onClick={() => navigator(Path.Signup)}
                >Назад к регистрации</Button>
            </div>
        </main>
    );
}