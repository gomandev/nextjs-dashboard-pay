import React from "react";

declare type state = {
  width: number;
  height: number;
};

const useViewport = (): state => {
  const [windowSize, setWindowSize] = React.useState<state | undefined>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    height: windowSize.height,
    width: windowSize.width,
  };
};

export default useViewport;
