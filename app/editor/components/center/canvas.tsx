'use client'
import {FC, DragEvent} from 'react';
import {Button} from 'antd';

import useEditorStore, {addComponent} from '@/store/editorStore';
import Draggable from './draggable';

type CanvasProps = {};

const Canvas: FC<CanvasProps> = () => {
  const canvasState = useEditorStore(state => state.canvas);

  const canvasOnDropHandler = (e: DragEvent) => {
    const componentStr = e.dataTransfer.getData('component');

    if (!componentStr) return;

    const component = JSON.parse(componentStr);

    const x = e.pageX;
    const y = e.pageY;
    const canvasPositionX = (window.innerWidth - (canvasState.style.width as number)) / 2; 
    const canvasPositionY = (window.innerHeight - 24 - (canvasState.style.height as number)) / 2 + 24;

    const offsetX = x - canvasPositionX;
    const offsetY = y - canvasPositionY;

    component.style.left = offsetX - component.style.width;
    component.style.top = offsetY - component.style.height / 2;

    addComponent(component);
  }

  return (
    <div
      style={{...canvasState.style}}
      className="shadow"
      onDrop={canvasOnDropHandler}
      onDragOver={(e) => e.preventDefault()}
    >
      {canvasState.children.map((child) => {
        switch(child.type) {
          case 'button':
            return (
              <Draggable key={child.id}>
                <Button style={{...child.style, transition: 'none'}} data-id={child.id}>{child.text}</Button>
              </Draggable>
            )
          case 'text':
            return (
              <Draggable key={child.id}>
                <span style={{...child.style, userSelect: 'none', cursor: 'pointer'}} data-id={child.id}>{child.text}</span>
              </Draggable>
            )
        }
      })}
    </div>
  )
}

export default Canvas;
