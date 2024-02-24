import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button } from "antd";

import { SignupFieldType } from "../../types/pages/auth";
import { Path } from "../../services/router/routes";

import logoClever from "../../assets/authPage/logoCleverFIT.svg";
import googleIcon from "../../assets/authPage/googleIcon.svg";

import styles from "./signup-page.module.css";


export function SignupPage() {
    const [isLoginButtonHovered, setIsLoginButtonHovered] = useState<boolean>(false);
    const navigator = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function getSwitchActionTextColor(isLoginButton: boolean): string {
        return isLoginButton ?
            !isLoginButtonHovered ? "#262626" : "#2F54EB"
            : isLoginButtonHovered ?  "#262626" : "#2F54EB";
    }

    function getSwitchActionBorderColor(isLoginButton: boolean): string {
        return isLoginButton ?
            !isLoginButtonHovered ? "1px solid #F0F0F0" : "2px solid #2F54EB"
            : isLoginButtonHovered ?  "1px solid #F0F0F0" : "2px solid #2F54EB";
    }

    return (
        <main className={styles.signupPageWrap}>
            <div className={styles.signupPageContainer}>
                <img src={logoClever} alt="logo" className={styles.signupPageContainer__logo}/>
                <div className={styles.switchWrap}>
                    <button
                        className={styles.switchWrap__loginPageAction}
                        style={{color: getSwitchActionTextColor(true), borderBottom: getSwitchActionBorderColor(true)}}
                        onMouseEnter={() => setIsLoginButtonHovered(true)}
                        onMouseLeave={() => setIsLoginButtonHovered(false)}
                        onClick={() => navigator(Path.Login)}
                    >Вход</button>
                    <button
                        className={styles.switchWrap__signupPageAction}
                        style={{color: getSwitchActionTextColor(false), borderBottom: getSwitchActionBorderColor(false)}}
                    >Регистрация</button>
                </div>
                <Form 
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className={styles.emailInputWrap}>
                        <Form.Item<SignupFieldType> name="username">
                            <div className={styles.emailInputWrap__formItemContainer}>
                                <div className={styles.emailInputWrap__emailDescription}>e-mail:</div>
                                <Input 
                                    style={{ width: '80%' }} 
                                    className={styles.emailInputWrap__emailInput}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <Form.Item<SignupFieldType> name="password" style={{ marginBottom: 0}}>
                        <Input.Password
                            placeholder="Пароль"
                            className={styles.formWrap__passwordinput}
                        />
                    </Form.Item>
                    <p className={styles.passwordDescription}>Пароль не менее 8 символов, с заглавной буквой и цифрой</p>
                    <Form.Item<SignupFieldType> name="confirmPassword">
                        <Input.Password
                            placeholder="Повторите пароль"
                            className={styles.formWrap__confirmPasswordinput}
                        />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0}}>
                        <Button type="primary" htmlType="submit" className={styles.formWrap__submitAction}>Войти</Button>
                    </Form.Item>
                </Form>
                <Button className={styles.loginPageContainer__oauthAction}>
                    <img src={googleIcon} alt="google logo" />
                    Регистрация через Google
                </Button>
            </div>
        </main>
    );
}