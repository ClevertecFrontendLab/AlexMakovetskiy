import { useEffect, useState } from "react";
import { Input, Form, Button } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "@hooks/typed-react-redux-hooks";
import { history } from "@redux/configure-store";

import { SignupRequestData } from "../../../types/api/api-types";
import { SignupFieldData, TConfirmPasswordValidator } from "../../../types/pages/auth";
import { IUserDataState } from "../../../types/redux/store-types";
import { passwordRegex, emailRegex } from "../../../helpers/auth-constants";
import { signupUser } from "../../../services/api/signup";
import { setToggleLoadingState } from "@redux/toggle-loading/toggle-loading-slice";
import userDataSelector from "@redux/user-data/user-data-selector";
import { setUserDataState, setInitialUserDataState } from "@redux/user-data/user-data-slice";
import { Path } from "../../../services/router/routes";
import { 
    antiFlashWhiteSolidBorder, 
    raisinBlackColor, 
    ultramarineBlueColor, 
    ultramarineBlueSolidBorder 
} from "../../../helpers/common-constants";

import logoClever from "../../../assets/authPage/logoCleverFIT.svg";

import styles from "./signup-page.module.css";

export function SignupPage() {
    const [isLoginButtonHovered, setIsLoginButtonHovered] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const userData = useAppSelector(userDataSelector);
    const prevPage = useAppSelector((state) => state.router.previousLocations);

    const [ form ] = Form.useForm();

    useEffect(() => {
        if(prevPage && prevPage[1]?.location?.pathname === Path.ErrorResult) {
            onFinish(userData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish = async (values: SignupFieldData) => {
        const signupData: SignupRequestData = {
            email: values.email,
            password: values.password
        }
        dispatch(setToggleLoadingState(true));
        signupUser(signupData)
            .then((async () => {
                await dispatch(setToggleLoadingState(false));
                await dispatch(setInitialUserDataState());
                return history.push(Path.SuccessResult);
            }))
            .catch(async (error) => {
                await dispatch(setToggleLoadingState(false));
                if(error.response.status === 409) {
                    return history.push(Path.UserExistError)
                }
                else {
                    const userData: IUserDataState = {
                        email: values.email ?? "",
                        password: values.password ?? "",
                        confirmPassword: values.confirmPassword ?? ""
                    }
                    await dispatch(setUserDataState(userData))
                    return history.push(Path.ErrorResult);
                }
            });
    };
    
    const confirmPasswordValidator: TConfirmPasswordValidator = (_rule, value) => {
        const { password, confirmPassword } = value;

        if (password && confirmPassword && password !== confirmPassword) {
            return Promise.reject('Пароли не совпадают');
        }
        return Promise.resolve();
    };

    function getSwitchActionTextColor(isLoginButton: boolean): string {
        return isLoginButton ?
            !isLoginButtonHovered ? raisinBlackColor : ultramarineBlueColor
            : isLoginButtonHovered ?  raisinBlackColor : ultramarineBlueColor;
    }

    function getSwitchActionBorderColor(isLoginButton: boolean): string {
        return isLoginButton ?
            !isLoginButtonHovered ? antiFlashWhiteSolidBorder : ultramarineBlueSolidBorder
            : isLoginButtonHovered ?  antiFlashWhiteSolidBorder : ultramarineBlueSolidBorder;
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
                        onClick={() => history.push(Path.Login)}
                    >Вход</button>
                    <button
                        className={styles.switchWrap__signupPageAction}
                        style={{color: getSwitchActionTextColor(false), borderBottom: getSwitchActionBorderColor(false)}}
                    >Регистрация</button>
                </div>
                <Form 
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <div className={styles.emailInputWrap}>
                        <Form.Item<SignupFieldData> 
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    pattern: emailRegex,
                                    message: "",
                                }
                            ]}>
                                <Input 
                                    addonBefore={<span className={styles.emailInputWrap__emailAddon}>email: </span>}
                                    className={styles.emailInputWrap__emailInput}
                                />
                        </Form.Item>
                    </div>
                    <div className={styles.fisrtPasswordWrap}>
                        <Form.Item
                            name="password"
                            help={<span className={styles.passwordDescription}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>}
                            rules={[
                            {
                                required: true,
                                pattern: passwordRegex,
                                message: 'Please enter your password',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        style={{ marginBottom: 0}}
                        rules={[
                        { 
                            required: true, 
                            pattern: passwordRegex,
                            message: "" 
                        },
                        {
                            validator: confirmPasswordValidator,
                            message: ""
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className={styles.confirmingPasswordStatusWrap}>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.confirmPassword !== currentValues.confirmPassword
                            }
                        >
                            {({ getFieldValue }) => {
                                const password = getFieldValue('password');
                                const confirmPassword = getFieldValue('confirmPassword');
                                if (password && confirmPassword && password !== confirmPassword) {
                                    return (
                                        <p className={styles.confirmingPasswordStatusWrap__title_visible}>Пароли не совпадают</p>
                                    );
                                }
                                return <p className={styles.confirmingPasswordStatusWrap__title_hidden}>error</p>;
                            }}
                        </Form.Item>
                    </div>

                    <Form.Item style={{ marginBottom: 0}}>
                        <Button type="primary" htmlType="submit" className={styles.formWrap__submitAction}>Войти</Button>
                    </Form.Item>
                </Form>
                <Button className={styles.loginPageContainer__oauthAction}>
                    <GooglePlusOutlined />
                    Регистрация через Google
                </Button>
            </div>
        </main>
    );
}