import React from "react";

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = React.useState(
    window.innerWidth > breakpoint,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
