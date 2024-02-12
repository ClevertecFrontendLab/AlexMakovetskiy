import { ReactNode } from "react";

export interface ITextBox {
    children: ReactNode;
}

export interface IActionCard {
    icon: ReactNode;
    linkButtonContent: string;
    initialTextLineContent: string;
    key: string;
}