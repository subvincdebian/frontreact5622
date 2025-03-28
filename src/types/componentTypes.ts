import { ReactNode } from "react";

export type TextComponentType = {
    id: number,
    title: string,
    content: string,
    list: TextComponentItemType[],
}

export type TextComponentItemType = {
    id: number,
    firstWord: string,
    link: string,
    text: string,
}

export type TextAndTitleType = {
    text: string,
    title: string,
}

export type ChildrenType = {
    children: React.ReactNode,
} & TextAndTitleType

/* ДЗ(Зверху з вашого гіту) */
export interface FeatureProps {
    icon: string;
    title: string;
    text: string;
    children?: ReactNode;
  }