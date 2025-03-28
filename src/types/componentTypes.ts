import { ReactNode } from "react";

export interface FeatureProps {
    icon: string;
    title: string;
    text: string;
    children?: ReactNode;
}
