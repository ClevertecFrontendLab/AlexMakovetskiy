import { useEffect, useState } from "react";
import { Button, Layout, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { CalendarOutlined, HeartFilled, IdcardOutlined, MenuFoldOutlined, TrophyFilled } from "@ant-design/icons";
import cn from "classnames/dedupe";

import { history } from "@redux/configure-store";

import { IMenuItemList } from "../../types/components/sider";
import { whitePrimaryColor } from "../../helpers/common-constants";
import { Path } from "../../services/router/routes";

import logo from "../../assets/sider/logo.svg";
import logoCollapsed from "../../assets/sider/logo-collapsed.svg";
import logout from "../../assets/sider/logout.svg";

import styles from "./sider.module.css";
import globalStyles from "../../globals.module.css";

const { Sider  } = Layout;

export function SiderElement() {
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(true);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);

    const mobileDeviceWidth = 500;

    const menuItemList: IMenuItemList[] = [
        {
            icon: <CalendarOutlined  className={styles.menuWrap__logo}/>,
            key: "menu0",
            itemContent: "Календарь"
        },
        {
            icon: <HeartFilled className={styles.menuWrap__logo}/>,
            key: "menu1",
            itemContent: "Тренировки"
        },
        {
            icon: <TrophyFilled  className={styles.menuWrap__logo}/>,
            key: "menu2",
            itemContent: "Достижения"
        },
        {
            icon: <IdcardOutlined  className={styles.menuWrap__logo}/>,
            key: "menu3",
            itemContent: "Профиль"
        },
    ];

    useEffect(() => {
        if(document.documentElement.clientWidth as number < mobileDeviceWidth) {
            setIsMobileView(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
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
    }, [isMobileView]);

    function handleLogout() {
        window.localStorage.setItem("accessToken", "");
        return history.push(Path.Login);
    }

    function getSiderWidth(): number {
        return isMobileView ? 
        106 : (isCollapsedSidebar ? 64 : 208);
    }

    function getTranslateXValue():number {
        if(!isMobileView) {
            return 0;
        }
        return !isCollapsedSidebar ? 106 : 0;
    }

    function getNavigationWrapLogo() {
        if(isMobileView) {
            return logo;
        }
        return !isCollapsedSidebar ? logo : logoCollapsed;
    }

    function renderMenuItemList() {
        return menuItemList.map((menuItem) => (
            <MenuItem 
                icon={!isMobileView ? menuItem.icon : <></>} 
                key={menuItem.key} 
                className={cn(styles.menuWrap__menuItem, globalStyles.bodyRegularFont)}
                style={{ paddingLeft:  isMobileView ? "8px" : "24px" }}
            >{!isCollapsedSidebar ? menuItem.itemContent : ""}</MenuItem>
        ));
    }

    return (
        <Sider className={styles.siderWrap} width={getSiderWidth()} style={{ transform: `translateX(${getTranslateXValue()}px)`}}>
            <nav className={styles.navigationWrap}>
                <img src={getNavigationWrapLogo()} alt="logo" className={styles.navigationWrap__logo}/>
                <Menu mode="inline" className={styles.menuWrap}>{renderMenuItemList()}</Menu>
            </nav>
            <Button 
                className={styles.siderWrap__collapseAction} 
                style={{borderColor: whitePrimaryColor}}
                icon={<MenuFoldOutlined className={styles.siderWrap__collapseAction__logo}/>} 
                data-test-id='sider-switch'
                onClick={() => setIsCollapsedSidebar(!isCollapsedSidebar)}
            />
            <Button 
                className={styles.siderWrap__collapseMobileAction} 
                style={{borderColor: whitePrimaryColor}}
                icon={<MenuFoldOutlined className={styles.siderWrap__collapseAction__logo}/>} 
                onClick={() => setIsCollapsedSidebar(!isCollapsedSidebar)}
                data-test-id='sider-switch-mobile'
            />
            <Button className={cn(styles.siderWrap__logoutAction, globalStyles.bodyRegularFont)} onClick={handleLogout}>
                { !isMobileView && <img src={logout} alt="logout" /> }
                { !isCollapsedSidebar && "Выход" }
            </Button>
        </Sider>
    );
}

