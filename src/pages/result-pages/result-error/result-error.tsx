import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CloseCircleFilled } from "@ant-design/icons";

import { Path } from "../../../services/router/routes";

import styles from "./result-error.module.css";

export function ResultErrorPage() {
    const navigator = useNavigate();

    return (
        <main className={styles.resultErrorPageWrap}>
            <div className={styles.resultErrorPageContainer}>
                <div className={styles.logoWrap}>
                    <CloseCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h3 className={styles.resultErrorPageContainer__title} style={{ margin: "0px"}}>Данные не сохранились</h3>
                <p className={styles.resultErrorPageContainer__subtitle}>Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.</p>
                <Button 
                    type="primary" 
                    className={styles.resultErrorPageContainer__signupAction}
                    onClick={() => navigator(Path.Signup)}
                >Повторить</Button>
            </div>
        </main>
    );
}