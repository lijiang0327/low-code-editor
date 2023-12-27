import Center from './components/center/center';
import Header from './/components/header/header';
import LeftSideBar from './components/leftSide/leftSideBar';
import RightSideBar from './components/rightSide/rightSideBar';

const Editor = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <Header/>
      <div className="flex-1 flex relative">
        <LeftSideBar className="h-full bg-slate-100" />
        <Center className="w-full h-full bg-slate-50 flex-1 flex items-center justify-center" />
        <RightSideBar className="h-full bg-slate-100" />
      </div>
    </div>
  )
}

export default Editor;
