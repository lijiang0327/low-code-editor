import {FC, ReactNode, Children, isValidElement, cloneElement, ReactElement} from  'react';
import {throttle, cloneDeep} from 'lodash';

import useEditorStore, { updateComponent } from '@/store/editorStore';

type DraggableProps = {
  children: ReactNode;
};

const Draggable: FC<DraggableProps> = ({children}) => {
  const canvasState = useEditorStore((state) => state.canvas);

  const onMouseDownHandler = (e: MouseEvent, child: ReactElement) => {
    let startX = e.pageX;
    let startY = e.pageY;

    const styleObject = cloneDeep(child.props.style);

    const move = throttle((event) => {
      const x = event.pageX;
      const y = event.pageY;

      const offsetX = x - startX;
      const offsetY = y - startY;

      styleObject.top += offsetY;
      styleObject.left += offsetX;

      styleObject.top = styleObject.top < 0 ? 0 : styleObject.top;
      styleObject.left = styleObject.left < 0? 0 : styleObject.left;

      const rightSideLine = (canvasState.style.width as number) - styleObject.width ?? 0;
      const bottomSideLine = (canvasState.style.height as number) - styleObject.height ?? 0;

      styleObject.top = styleObject.top > bottomSideLine ? bottomSideLine : styleObject.top;
      styleObject.left = styleObject.left > rightSideLine ? rightSideLine : styleObject.left;

      updateComponent({
        id: child.props['data-id'],
        style: styleObject
      });

      startX = x;
      startY = y;
    }, 20)

    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }

  const newChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement<any>(child, {
        onMouseDown: (e: MouseEvent) => onMouseDownHandler(e, child)
      })
    }

    return child;
  })
  return <>
    {newChildren}
  </>;
}

export default Draggable;
