'use client'

import {FC} from 'react';

import useEditorStore from '@/store/editorStore';

type HeaderProps = {
  className?: string;
}

const Header: FC<HeaderProps> = ({className}) => {
  const canvas = useEditorStore(state => state.canvas)

  return (
    <div className={className}>{canvas.title}</div>
  )
}

export default Header;
