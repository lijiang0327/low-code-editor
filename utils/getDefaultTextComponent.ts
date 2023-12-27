import type { IComponent } from '@/store/editorStore.d';

import getDefaultComponentStyle from './getDefaultComponentStyle';
import getUniqueId from './getUniqueId';

const getDefaultTextComponent = () => {
  return {
    type: 'text',
    style: {
      ...getDefaultComponentStyle(),
      width: 30,
      height: 24
    },
    id: getUniqueId(),
    text: 'Text',
  } as IComponent;
}

export default getDefaultTextComponent;
