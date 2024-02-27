import { useState, useEffect } from 'react';
import { Typography, Button, Layout } from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import cn from "classnames/dedupe";

import { nbsp } from "../../helpers/common-constants";

import styles from "./header.module.css";
import globalStyles from "../../globals.module.css";

const { Text } = Typography;
const { Header } = Layout;

export function HeaderElement() {
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isTabletView, setIsTabletView] = useState<boolean>(false);

    const tabletDeviceWidth = 900;
    const mobileDeviceWidth = 500;

    useEffect(() => {
        if(document.documentElement.clientWidth as number < tabletDeviceWidth) {
            setIsTabletView(true);
        }
        if(document.documentElement.clientWidth as number < mobileDeviceWidth) {
            setIsTabletView(false);
            setIsMobileView(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= tabletDeviceWidth && !isTabletView) {
                setIsTabletView(true);
            } else if (screenWidth > tabletDeviceWidth && isTabletView) {
                setIsTabletView(false);
            }
            if (screenWidth <= mobileDeviceWidth && !isMobileView) {
                setIsMobileView(true);
            } else if (screenWidth > mobileDeviceWidth && isMobileView) {
                setIsMobileView(false);
            }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileView, isTabletView]);

    function getCorrectIcon() {
        if(isMobileView) {
            return <SettingOutlined />;
        }
        return !isTabletView ? <SettingOutlined /> : <></>;
    }

    return (
        <Header className={styles.headerWrap} style={{ height: "initial" }}>
            <div className={styles.headerContainer}>
                <Text className={cn(styles.headerContainer__title, globalStyles.bodyRegularFont)}>Главная</Text>
                <div className={styles.headerContentWrap}>
                    <h1 className={styles.headerContentWrap__title}>Приветствуем тебя в{nbsp}CleverFit{nbsp}— приложении, которое поможет тебе добиться своей мечты!</h1>
                    <Button 
                        type="text"
                        icon={getCorrectIcon()}
                        className={cn(styles.headerContentWrap__settingsAction, globalStyles.bodyRegularFont)}
                    >{!isMobileView ? "Настройки" : ""}</Button>
                </div>
            </div>
        </Header>
    );
}