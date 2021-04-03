import React, { useRef, useState } from "react";
import { CloseIcon, FloatingHeader, FloatingWrapper } from "./styled";

export interface FloatingProps {
  children: React.ReactNode;
  direction: "left" | "top" | "right" | "bottom";
}

const Floating = ({ children, direction }: FloatingProps) => {
  const refFloating: any = useRef();
  const [position, setPosition] = useState("0px");

  return (
    <FloatingWrapper
      ref={refFloating}
      position={position}
      direction={direction}
    >
      <FloatingHeader>
        <CloseIcon
          onClick={() => {
            setPosition(`-${refFloating?.current.clientWidth.toString()}px`);
          }}
        >
          &times;
        </CloseIcon>
      </FloatingHeader>

      {children}
    </FloatingWrapper>
  );
};

Floating.defaultProps = {
  direction: "right",
};

export default Floating;
