import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Form, Checkbox, Button } from "antd";

import { LoginFieldType } from "../../types/pages/auth";
import { Path } from "../../services/router/routes";

import logoClever from "../../assets/authPage/logoCleverFIT.svg";
import googleIcon from "../../assets/authPage/googleIcon.svg";

import styles from "./login-page.module.css";

export function LoginPage() {
    const [isSignupButtonHovered, setIsSignupButtonHovered] = useState<boolean>(false);
    const navigator = useNavigate();
    
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function getSwitchActionTextColor(isSignupButton: boolean): string {
        return isSignupButton ?
            !isSignupButtonHovered ? "#262626" : "#2F54EB"
            : isSignupButtonHovered ?  "#262626" : "#2F54EB";
    }

    function getSwitchActionBorderColor(isSignupButton: boolean): string {
        return isSignupButton ?
            !isSignupButtonHovered ? "1px solid #F0F0F0" : "2px solid #2F54EB"
            : isSignupButtonHovered ?  "1px solid #F0F0F0" : "2px solid #2F54EB";
    }
    
    return (
        <main className={styles.loginPageWrap}>
            <div className={styles.loginPageContainer}>
                <img src={logoClever} alt="logo" className={styles.loginPageContainer__logo}/>
                <div className={styles.switchWrap}>
                    <button
                        className={styles.switchWrap__loginPageAction}
                        style={{color: getSwitchActionTextColor(false), borderBottom: getSwitchActionBorderColor(false)}}
                    >Вход</button>
                    <button
                        className={styles.switchWrap__signupPageAction}
                        style={{color: getSwitchActionTextColor(true), borderBottom: getSwitchActionBorderColor(true)}}
                        onMouseEnter={() => setIsSignupButtonHovered(true)}
                        onMouseLeave={() => setIsSignupButtonHovered(false)}
                        onClick={() => navigator(Path.Signup)}
                    >Регистрация</button>
                </div>

                <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className={styles.formWrap}
                >
                    <div className={styles.emailInputWrap}>
                        <Form.Item<LoginFieldType> name="username">
                            <div className={styles.emailInputWrap__formItemContainer}>
                                <div className={styles.emailInputWrap__emailDescription}>e-mail:</div>
                                <Input 
                                    style={{ width: '80%' }} 
                                    className={styles.emailInputWrap__emailInput}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <Form.Item<LoginFieldType>
                        name="password"
                        >
                        <Input.Password
                            placeholder="Пароль"
                            className={styles.formWrap__passwordinput}
                        />
                    </Form.Item>
                    <div className={styles.rememberMeWrap}>
                        <Form.Item<LoginFieldType>
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Button type="link">Забыли пароль?</Button>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.formWrap__submitAction}>Войти</Button>
                    </Form.Item>
                </Form>
                <Button className={styles.loginPageContainer__oauthAction}>
                    <img src={googleIcon} alt="google logo" />
                    Войти через Google
                </Button>
            </div>
        </main>
    );
}