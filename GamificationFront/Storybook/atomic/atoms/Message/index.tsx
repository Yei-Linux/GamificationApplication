import React, { CSSProperties } from "react";
import { MessageWrapper } from "./styled";

export interface MessageProps {
  text: string;
  direction: "left" | "right";
  background: string;
  style?: CSSProperties;
}

const Message = ({ text, direction, background, style }: MessageProps) => {
  return (
    <MessageWrapper background={background} direction={direction} style={style}>
      {text}
    </MessageWrapper>
  );
};

Message.defaultProps = {
  text: "Hola Bienvenido a nuestra app!",
  direction: "left",
  background: "#7868e6",
  style: {},
};

export default Message;
