import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";

export const FloatingWrapper = styled.div<{
  direction: "left" | "top" | "right" | "bottom";
  position: string;
}>`
  ${tw`shadow-lg`}
  width: fit-content;
  padding: 15px 0px;

  position: absolute;
  transition: all 1.5s;

  ${(props) =>
    props.direction == "right" &&
    css`
      top: 30%;
      right: ${props.position};
    `}

    ${(props) =>
      props.direction == "left" &&
      css`
        top: 30%;
        left: ${props.position};
      `}

        ${(props) =>
          props.direction == "top" &&
          css`
            left: 30%;
            top: ${props.position};
          `}

            ${(props) =>
              props.direction == "bottom" &&
              css`
                left: 30%;
                bottom: ${props.position};
              `}
`;

export const FloatingHeader = styled.div`
  display: flex;
`;

export const CloseIcon = styled.span`
  color: white;
  background: #7868e6;
  border-radius: 2em;
  padding: 0px 6px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }
`;
