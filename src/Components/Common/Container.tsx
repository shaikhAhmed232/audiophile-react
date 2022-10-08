import React from "react";

type ContainerProp = {
  children: JSX.Element;
};

function Container({ children }: ContainerProp) {
  return (
    <div className="sm:w-[80%] max-w-[1000px] w-full ss:mx-auto">
      {children}
    </div>
  );
}

export default Container;
