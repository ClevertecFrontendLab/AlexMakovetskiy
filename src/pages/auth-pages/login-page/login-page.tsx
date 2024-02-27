import { useEffect, useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { AxiosResponse } from "axios";

import { useAppDispatch } from "@hooks/typed-react-redux-hooks";
import { history } from "@redux/configure-store";

import { AccessData, LoginRequestData } from "../../../types/api/api-types";
import { LoginFieldType } from "../../../types/pages/auth";
import { antiFlashWhiteSolidBorder, raisinBlackColor, ultramarineBlueColor, ultramarineBlueSolidBorder } from "../../../helpers/common-constants";
import { loginUser } from "../../../services/api/login";
import { setToggleLoadingState } from "@redux/toggle-loading/toggle-loading-slice";
import { emailRegex, passwordRegex } from "../../../helpers/auth-constants";
import { Path } from "../../../services/router/routes";

import logoClever from "../../../assets/authPage/logoCleverFIT.svg";

import styles from "./login-page.module.css";

export function LoginPage() {
    const [isSignupButtonHovered, setIsSignupButtonHovered] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const [ form ] = Form.useForm();
    
    useEffect(() => {
        const accessToken = window.localStorage.getItem("accessToken");
        if(accessToken) {
            history.push(Path.MainPage);
        }
    }, []);

    const onFinish = async (values: LoginFieldType) => {
        const loginData: LoginRequestData = {
            email: values.email,
            password: values.password
        }

        dispatch(setToggleLoadingState(true));
        await loginUser(loginData)
            .then(async (response: AxiosResponse) => {
                dispatch(setToggleLoadingState(false));
                if(!values.remember) {
                    await window.localStorage.setItem("accessToken", "");
                }
                const { accessToken }: AccessData = response.data;
                await window.localStorage.setItem("accessToken", accessToken);
                history.push(Path.MainPage);
            })
            .catch(() => {
                dispatch(setToggleLoadingState(false));
                return history.push(Path.LoginErrorResult);
            })
    };

    function getSwitchActionTextColor(isSignupButton: boolean): string {
        return isSignupButton ?
            !isSignupButtonHovered ? raisinBlackColor : ultramarineBlueColor
            : isSignupButtonHovered ?  raisinBlackColor : ultramarineBlueColor;
    }

    function getSwitchActionBorderColor(isSignupButton: boolean): string {
        return isSignupButton ?
            !isSignupButtonHovered ? antiFlashWhiteSolidBorder : ultramarineBlueSolidBorder
            : isSignupButtonHovered ?  antiFlashWhiteSolidBorder : ultramarineBlueSolidBorder;
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
                        onClick={() => history.push(Path.Signup)}
                    >Регистрация</button>
                </div>

                <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className={styles.formWrap}
                    form={form}
                >
                    <div className={styles.emailInputWrap}>
                        <Form.Item<LoginFieldType> 
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    pattern: emailRegex,
                                    message: "",
                                }
                            ]}>
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
                        rules={[{
                                required: true,
                                pattern: passwordRegex,
                                message: '',
                            }]
                        }>
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
                        <Button type="link" onClick={() => history.push(Path.RecoveryPassword)}>Забыли пароль?</Button>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.formWrap__submitAction}>Войти</Button>
                    </Form.Item>
                </Form>
                <Button className={styles.loginPageContainer__oauthAction}>
                    <GooglePlusOutlined />
                    Войти через Google
                </Button>
            </div>
        </main>
    );
}