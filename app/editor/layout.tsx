import {ReactNode, FC} from "react";

type EditorLayoutProps = {
  children: ReactNode
}

const EditorLayout: FC<EditorLayoutProps> = ({children}) => {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

export default EditorLayout;
