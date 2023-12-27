import {create} from 'zustand';
import {merge} from 'lodash';

import getDefaultCanvasStyle from '@/utils/getDefaultCanvasStyle';
import type {ICanvas, IComponent} from './editorStore.d';

type EditorStoreState = {
  canvas: ICanvas;
}

const useEditorStore = create<EditorStoreState>()((set) => ({
  canvas: {
    title: '未命名',
    children: [],
    style: getDefaultCanvasStyle()
  }
}));

export const addComponent = (component: IComponent) => {
  useEditorStore.setState((state) => {
    const children = [...state.canvas.children, component];
    return {
      canvas: {
        ...state.canvas,
        children
      }
    }
  });
}

export const updateComponent = (component: Partial<IComponent> & {id: number}) => {
  useEditorStore.setState((state) => {
    const children = [...state.canvas.children];

    children.forEach((child) => {
      if (child.id === component.id) {
        merge(child, component);
      }
    });

    return {
      canvas: {
        ...state.canvas,
        children,
      }
    }
  })
}

export default useEditorStore;
