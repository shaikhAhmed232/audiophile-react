import React from "react";
import { useLocation } from "react-router-dom";

type WrapperProps = {
  children: JSX.Element;
};

function Wrapper({ children }: WrapperProps) {
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scroll(0, 0);
  }, [location]);

  return children;
}

export default Wrapper;
