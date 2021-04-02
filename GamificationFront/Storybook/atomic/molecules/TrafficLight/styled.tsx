import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TrafficWrapper = styled.div`
  width: fit-content;
`;

export const TrafficLightWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 10px 0px;
  background-color: ${(props) => props.color};
  border-radius: 0.4em;
`;

export const TrafficLightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Balls = styled.div<{ color: string; bright: string }>`
  border-radius: 4em;
  background-color: ${(props) => props.color};
  height: 40px;
  width: 40px;
  margin: 5px 30px;

  ${(props) =>
    props.bright != "" &&
    css`
      box-shadow: ${props.bright};
    `}
`;

export const TextCounter = styled.div`
  min-height: 50px;
  width: 100%;
  margin: 15px 0px;
  border-radius: 0.4em;
  font-weight: bold;
  color: #bababa;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: segment7;
  font-size: 3em;
  transition: color 0.3s;

  p {
    margin: 0px;
  }
`;
