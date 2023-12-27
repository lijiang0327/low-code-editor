import {FC} from 'react';

type RightSideBarProps = {
  className?: string;
}

const RightSideBar: FC<RightSideBarProps> = ({className}) => {
  return (
    <div className={className}>right side bar</div>
  )
}

export default RightSideBar;
