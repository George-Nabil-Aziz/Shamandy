import { useEffect, useState } from "react";

// Screen size
const getSize = (size) => {
  if (size >= 1536) return "xxl";
  else if (size >= 1280) return "xl";
  else if (size >= 1024) return "lg";
  else if (size >= 768) return "md";
  else if (size >= 640) return "sm";
  else return "xs";
};

export const useScreenSize = () => {
  const [size, setSize] = useState(getSize(window.innerWidth));

  useEffect(() => {
    const handleResizeListener = () => setSize(getSize(window.innerWidth));
    window.addEventListener("resize", handleResizeListener);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResizeListener);
  }, []);

  // All possible screen sizes
  const allSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

  // Is equal to
  const isSize = (checkSize) => size === checkSize;

  // Is equal to or greater
  const isEqualOrGreater = (checkSize) => {
    return allSizes.indexOf(size) >= allSizes.indexOf(checkSize);
  };

  // Is equal to or smaller
  const isEqualOrSmaller = (checkSize) => {
    return allSizes.indexOf(size) <= allSizes.indexOf(checkSize);
  };

  return {
    // Screen Size
    size,

    // Is equal to
    xs: () => isSize("xs"),
    sm: () => isSize("sm"),
    md: () => isSize("md"),
    lg: () => isSize("lg"),
    xl: () => isSize("xl"),
    xxl: () => isSize("xxl"),

    // Is equal to or greater
    gtE: {
      xs: () => isEqualOrGreater("xs"),
      sm: () => isEqualOrGreater("sm"),
      md: () => isEqualOrGreater("md"),
      lg: () => isEqualOrGreater("lg"),
      xl: () => isEqualOrGreater("xl"),
      xxl: () => isEqualOrGreater("xxl"),
    },

    // Is equal to or smaller
    ltE: {
      xs: () => isEqualOrSmaller("xs"),
      sm: () => isEqualOrSmaller("sm"),
      md: () => isEqualOrSmaller("md"),
      lg: () => isEqualOrSmaller("lg"),
      xl: () => isEqualOrSmaller("xl"),
      xxl: () => isEqualOrSmaller("xxl"),
    },
  };
};
