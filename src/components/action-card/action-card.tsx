import { Button, Typography } from "antd";
import cn from "classnames/dedupe";

import { IActionCard } from "../../types/common/component-props";

import styles from "./action-card.module.css";
import globalStyles from "../../globals.module.css";

const { Text } = Typography;

export function ActionCard({icon, initialTextLineContent, linkButtonContent}: IActionCard) {
    return (
        <div className={styles.actionCardWrap}>
            <Text className={cn(styles.actionCardWrap__title, globalStyles.bodyRegularHigherFont)}>{initialTextLineContent}</Text>
            <div className={styles.linkBoxContainer}>
                <Button 
                    type="text"
                    icon={icon}
                    className={cn(styles.linkBoxContainer__linkAction, globalStyles.bodyRegularFont)}
                >{linkButtonContent}</Button>
            </div>
        </div>
    );
}