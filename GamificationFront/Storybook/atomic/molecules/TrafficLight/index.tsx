import React from "react";
import { Balls, TrafficLightContainer, TrafficLightWrapper } from "./styled";

export interface TrafficLightProps {}

const TrafficLight = () => {
  return (
    <TrafficLightWrapper>
      <TrafficLightContainer>
        <Balls color="red" isBright />
        <Balls color="orange" isBright />
        <Balls color="green" isBright />
      </TrafficLightContainer>
    </TrafficLightWrapper>
  );
};

export default TrafficLight;
