import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MessageWrapper = styled.div<{
  direction: string;
  background: string;
}>`
  position: relative;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 10px;
  background-color: ${(props) => props.background};
  width: 200px;
  height: 50px;
  text-align: left;
  font: 400 0.9em "Open Sans", sans-serif;
  font-weight: bold;
  border: 1px solid ${(props) => props.background};
  border-radius: 10px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;

    border-left: 16px solid transparent;
    border-right: 16px solid transparent;

    ${(props) =>
      props.direction == "left" &&
      css`
        border-top: 17px solid ${props.background};
        top: -1px;
        left: -17px;
      `}

    ${(props) =>
      props.direction == "right" &&
      css`
        border-bottom: 17px solid ${props.background};
        bottom: -1px;
        right: -17px;
      `}
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;

    border-left: 15px solid transparent;
    border-right: 15px solid transparent;

    ${(props) =>
      props.direction == "left" &&
      css`
        border-top: 15px solid ${props.background};
        top: 0;
        left: -15px;
      `}

    ${(props) =>
      props.direction == "right" &&
      css`
        border-bottom: 15px solid ${props.background};
        bottom: 0;
        right: -15px;
      `}
  }
`;
