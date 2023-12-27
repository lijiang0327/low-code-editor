import {FC} from 'react';

import Canvas from './canvas';

type CenterProps = {
  className?: string;
}

const Center: FC<CenterProps> = ({className}) => {
  return (
    <div className={className}>
      <Canvas />
    </div>
  )
}

export default Center;
