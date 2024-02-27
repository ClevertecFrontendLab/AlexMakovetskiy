import { Typography, Button, Layout } from 'antd';
import { AndroidFilled, AppleFilled, CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import cn from "classnames/dedupe";

import { IActionCard } from '../../types/common/component-props';
import { ActionCard, TextBox } from "..";
import { nbsp } from '../../helpers/common-constants';

import styles from "./page-container.module.css";
import globalStyles from "../../globals.module.css";

const { Title, Text } = Typography;
const { Footer } = Layout;

export function PageContainer() {
    const actionCardListData: IActionCard[] = [
        {
            initialTextLineContent: "Расписать тренировки",
            linkButtonContent: "Тренировки",
            icon: <HeartFilled className={styles.actionCardListWrap__actionCardImage}/>,
            key: "actionCard0"
        },
        {
            initialTextLineContent: "Назначить календарь",
            linkButtonContent: "Календарь",
            icon: <CalendarOutlined className={styles.actionCardListWrap__actionCardImage}/>,
            key: "actionCard1"
        },  
        {
            initialTextLineContent: "Заполнить профиль",
            linkButtonContent: "Профиль",
            icon: <IdcardOutlined className={styles.actionCardListWrap__actionCardImage}/>,
            key: "actionCard2"
        },     
    ]

    function renderActionCardList() {
        return actionCardListData.map((actionCardData) => (
            <ActionCard 
                initialTextLineContent={actionCardData.initialTextLineContent}            
                linkButtonContent={actionCardData.linkButtonContent} 
                icon={actionCardData.icon} 
                key={actionCardData.key}
            />
        ));
    }

    return (
        <main className={styles.pageContainerWrap}>
            <div className={styles.pageContentContainer}>
                <TextBox>
                    <Text className={cn(styles.pageContentContainer__firstBoxTitle, globalStyles.bodyRegularHigherFont)}>С CleverFit ты сможешь:<br/></Text>
                    <Text className={cn(styles.pageContentContainer__firstBoxListItem, globalStyles.bodyRegularHigherFont)}>
                        — планировать свои тренировки на{nbsp}календаре, выбирая тип и{nbsp}уровень нагрузки;<br/>
                        — отслеживать свои достижения в{nbsp}разделе статистики, сравнивая свои результаты с{nbsp}нормами и{nbsp}рекордами;<br/>
                        — создавать свой профиль, где ты{nbsp}можешь загружать свои фото, видео и{nbsp}отзывы о{nbsp}тренировках;<br/>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и{nbsp}советам профессиональных тренеров.
                    </Text>
                </TextBox>
                <TextBox>
                    <Title level={4} className={cn(styles.pageContentContainer__secondBoxTitle, globalStyles.bodyRegularHigherFont)}>
                        CleverFit{nbsp}— это не{nbsp}просто приложение, а{nbsp}твой личный помощник в{nbsp}мире фитнеса. Не{nbsp}откладывай на{nbsp}завтра{nbsp}— начни тренироваться уже сегодня!
                    </Title>
                </TextBox>
                <div className={styles.actionCardListWrap}>{renderActionCardList()}</div>
            </div>
            <Footer className={styles.footerWrap} style={{background: "none", padding: 0}}>
                <Button type="text" className={cn(styles.footerWrap__reviewsAction, globalStyles.bodyRegularHigherFont)}>Смотреть отзывы</Button>
                <div className={styles.storeBoxWrap}>
                    <Text className={cn(styles.storeBoxWrap__title, globalStyles.bodyRegularHigherFont)}>Скачать на телефон </Text>
                    <Text className={cn(styles.storeBoxWrap__subtitle, globalStyles.bodyRegularHigherFont)}>Доступно в PRO-тарифе</Text>
                    <div className={styles.linkBoxContainer}>
                        <Button 
                            type="text"
                            icon={<AndroidFilled />}
                            className={cn(styles.linkBoxContainer__linkAction, globalStyles.bodyRegularFont)}
                        >Android OS</Button>
                        <Button 
                            type="text"
                            icon={<AppleFilled />}
                            className={cn(styles.linkBoxContainer__linkAction, globalStyles.bodyRegularFont)}
                        >Apple iOS</Button>
                    </div>
                </div>
            </Footer>
        </main>
    );
}