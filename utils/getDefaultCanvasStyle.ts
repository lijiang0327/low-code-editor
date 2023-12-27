import { CSSProperties } from "react";

const getDefaultCanvasStyle = () => {
  return {
    width: 800,
    height: 600,
    position: 'relative',
    backgroundColor: "#ffffff",
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  } as CSSProperties
}

export default getDefaultCanvasStyle;
