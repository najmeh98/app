import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? window.innerWidth : undefined,
    height: isSSR ? window.innerHeight : undefined,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // برای بار اول صدا زده میشه که استیت پر بشه با داده های اولیه
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
