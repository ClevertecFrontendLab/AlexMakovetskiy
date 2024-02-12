import { ITextBox } from "../../types/common/component-props";

import styles from "./text-box.module.css";

export function TextBox({children}: ITextBox) {
    return (
        <div className={styles.textBoxWrap}>
            <div className={styles.textBoxContainer}>
                {children}
            </div>
        </div>
    );
}