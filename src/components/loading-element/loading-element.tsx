import Lottie from 'react-lottie';

import animationData from '../../assets/loadingElement/animation.json';

import styles from "./loading-element.module.css";

export function LoadingElement() {
    const defaultOptions = {
        loop: true, 
        autoplay: true, 
        animationData: animationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', 
        },
    };
    
    return (
        <div className={styles.loadingElementWrap}>
            <div className={styles.loadingElementContainer}>
                <Lottie options={defaultOptions} height={150} width={150} />
            </div>
        </div>
    );
}