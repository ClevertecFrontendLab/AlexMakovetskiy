import VerificationInput from "react-verification-input";

import suggested from "../../assets/RecoveryPassword/suggested.svg"

import styles from "./recovery-password.module.css";

export function RecoveryPassword() {
    const email = "email";

    return (
        <div className={styles.recoveryPasswordWrap}>
            <div className={styles.recoveryPasswordConteiner}>
                <img src={suggested} alt="suggested" className={styles.recoveryPasswordConteiner__suggestedLogo}/>
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