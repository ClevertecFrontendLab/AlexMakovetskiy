import VerificationInput from "react-verification-input";
import { ExclamationCircleFilled } from "@ant-design/icons";

import styles from "./recovery-password.module.css";

export function RecoveryPassword() {
    const email = "email";

    return (
        <div className={styles.recoveryPasswordWrap}>
            <div className={styles.recoveryPasswordConteiner}>
                <div className={styles.logoWrap}>
                    <ExclamationCircleFilled className={styles.logoWrap__logo}/>
                </div>
                <h4 className={styles.recoveryPasswordConteiner__title}>Введите код </h4>
                <h4 className={styles.recoveryPasswordConteiner__title}>для восстановления аккауанта</h4>
                <p className={styles.recoveryPasswordConteiner__subtitle}>
                Мы отправили вам на e-mail 
                <span className={styles.recoveryPasswordConteiner__subtitle_bold}>{` ${email} `}</span>
                шестизначный код. Введите его в поле ниже.
                </p>
                <div className={styles.verificationInputWrap}>
                    <VerificationInput 
                        classNames={{
                            character: styles.character,
                            characterSelected: styles.characterSelected,
                        }}
                        placeholder=""
                    />
                </div>
                <p className={styles.recoveryPasswordConteiner__subtitle}>Не пришло письмо? Проверьте папку Спам.</p>
            </div>
        </div>
    );
}