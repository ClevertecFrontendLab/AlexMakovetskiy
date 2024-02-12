import { useState } from "react";
import { Button, Layout, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { CalendarOutlined, HeartFilled, IdcardOutlined, MenuFoldOutlined, TrophyFilled } from "@ant-design/icons";
import cn from "classnames/dedupe";

import logo from "../../assets/sider/logo.svg";
import logoCollapsed from "../../assets/sider/logo-collapsed.svg";
import logout from "../../assets/sider/logout.svg";

import styles from "./sider.module.css";
import globalStyles from "../../globals.module.css";

const { Sider  } = Layout;

export function SiderElement() {
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);

    return (
        <Sider className={styles.siderWrap} width={isCollapsedSidebar ? 64 : 208}>
            <nav className={styles.navigationWrap}>
                <img src={!isCollapsedSidebar ? logo : logoCollapsed} alt="logo" className={styles.navigationWrap__logo}/>
                <Menu mode="inline" className={styles.menuWrap}>
                    <MenuItem 
                        icon={<CalendarOutlined  className={styles.menuWrap__logo}/>} 
                        key="menu1" 
                        className={cn(styles.menuWrap__menuItem, globalStyles.bodyRegularFont)}
                    >{!isCollapsedSidebar ? "Календарь" : ""}</MenuItem>
                    <MenuItem 
                        icon={<HeartFilled className={styles.menuWrap__logo}/>} 
                        key="menu2" 
                        className={cn(styles.menuWrap__menuItem, globalStyles.bodyRegularFont)}
                    >{!isCollapsedSidebar ? "Тренировки" : ""}</MenuItem>
                    <MenuItem 
                        icon={<TrophyFilled  className={styles.menuWrap__logo}/>} 
                        key="menu3" 
                        className={cn(styles.menuWrap__menuItem, globalStyles.bodyRegularFont)}
                    >{ !isCollapsedSidebar ?"Достижения" : ""}</MenuItem>
                    <MenuItem 
                        icon={<IdcardOutlined  className={styles.menuWrap__logo}/>} 
                        key="menu4" 
                        className={cn(styles.menuWrap__menuItem, globalStyles.bodyRegularFont)}
                    >{ !isCollapsedSidebar ?"Профиль" : ""}</MenuItem>
                </Menu>
            </nav>
            <Button 
                className={styles.siderWrap__collapseAction} 
                icon={<MenuFoldOutlined className={styles.siderWrap__collapseAction__logo}/>} 
                data-test-id='sider-switch'
                onClick={() => setIsCollapsedSidebar(!isCollapsedSidebar)}
            />
            <Button className={cn(styles.siderWrap__logoutAction, globalStyles.bodyRegularFont)}>
                <img src={logout} alt="logout" />
                {!isCollapsedSidebar && "Выход"}
            </Button>
        </Sider>
    );
}

