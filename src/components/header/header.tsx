import { SettingOutlined } from "@ant-design/icons";
import { Typography, Button } from 'antd';

import { nbsp } from "../../helpers/common-constants";

import styles from "./header.module.scss";

const { Title, Text } = Typography;

export function Header() {
    return (
        <header className={styles.headerWrap}>
            <div className={styles.headerContainer}>
                <Text className={styles.headerContainer__title}>Главная</Text>
                <div className={styles.headerContentWrap}>
                    <Title className={styles.headerContentWrap__title}>Приветствуем тебя в{nbsp}CleverFit{nbsp}— приложении, которое поможет тебе добиться своей мечты!</Title>
                    <Button 
                        type="text"
                        icon={<SettingOutlined />}
                        className={styles.headerContentWrap__settingsAction}
                    >Настройки</Button>
                </div>
            </div>
        </header>
    );
}