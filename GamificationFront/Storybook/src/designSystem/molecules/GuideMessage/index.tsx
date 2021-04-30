import React from "react";
import AnimatorGuide from "../../atoms/AnimatorGuide/AnimatorGuide";
import Message from "../../atoms/Message/Message";
import { GuideMessageWrapper } from "./styled";

export interface GuideMessageProps {
  guideType: string;
  message: string;
  direction: "left" | "right";
  background: string;
}

const GuideMessage = ({
  guideType,
  message,
  direction,
  background,
}: GuideMessageProps) => {
  return (
    <GuideMessageWrapper direction={direction}>
      <AnimatorGuide type={guideType} />
      <Message
        style={{ marginTop: "15px" }}
        text={message}
        direction={direction}
        background={background}
      />
    </GuideMessageWrapper>
  );
};

export default GuideMessage;
