import { Typography, Button, Layout } from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import cn from "classnames/dedupe";

import { nbsp } from "../../helpers/common-constants";

import styles from "./header.module.css";
import globalStyles from "../../globals.module.css";

const { Title, Text } = Typography;
const { Header } = Layout;

export function HeaderElement() {
    return (
        <Header className={styles.headerWrap}>
            <div className={styles.headerContainer}>
                <Text className={globalStyles.bodyRegularFont}>Главная</Text>
                <div className={styles.headerContentWrap}>
                    <Title className={styles.headerContentWrap__title}>Приветствуем тебя в{nbsp}CleverFit{nbsp}— приложении, которое поможет тебе добиться своей мечты!</Title>
                    <Button 
                        type="text"
                        icon={<SettingOutlined />}
                        className={cn(styles.headerContentWrap__settingsAction, globalStyles.bodyRegularFont)}
                    >Настройки</Button>
                </div>
            </div>
        </Header>
    );
}