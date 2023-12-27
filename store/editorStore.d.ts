import { type CSSProperties } from "react";

export type Style = CSSProperties;

export interface ICanvas {
  title: string;
  style: Style;
  children: Array<IComponent>;
}

export type IComponentType = 'text' | 'image' | 'input' | 'button' | 'textarea' | 'checkbox' | 'radio';

export interface IComponent {
  type: IComponentType
  style: Style;
  id: number;
  value?: string;
  onClick?: string;
  text?: string;
}

export interface IGroup {
  children: Array<IComponent>;
  id: number;
}
