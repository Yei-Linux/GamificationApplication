import React, { Fragment, useEffect, useState } from "react";
import { TrafficLightColors } from "../../../core/domain/const/components";
import {
  Balls,
  TextCounter,
  TrafficLightContainer,
  TrafficLightWrapper,
  TrafficWrapper,
} from "./styled";

export interface TrafficLightProps {}

const TrafficLight = () => {
  const [counter, setCounter] = useState(10);
  const [isBrightRed, setIsBrightRed] = useState(true);
  const [isBrightOrange, setIsBrightOrange] = useState(false);
  const [isBrightGreen, setIsBrightGreen] = useState(false);

  const timeout = (t): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, t);
    });
  };

  const startingCountdownLight = async () => {
    await timeout(3000);
    setIsBrightRed(false);
    setIsBrightOrange(true);
    await timeout(3000);
    setIsBrightOrange(false);
    setIsBrightGreen(true);
    await timeout(4000);
    setIsBrightGreen(false);
  };

  const startingCountdownTimer = async () => {
    const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    for (let item of array) {
      await timeout(1000);
      setCounter(item);
    }
  };

  useEffect(() => {
    startingCountdownLight();
    startingCountdownTimer();
  }, []);

  return (
    <Fragment>
      <TrafficWrapper>
        <TrafficLightWrapper color="#3a3a3a">
          <TrafficLightContainer>
            <Balls
              color={
                TrafficLightColors.red[isBrightRed ? "brightColor" : "color"]
              }
              bright={isBrightRed ? TrafficLightColors.red["shadow"] : ""}
            />
            <Balls
              color={
                TrafficLightColors.orange[
                  isBrightOrange ? "brightColor" : "color"
                ]
              }
              bright={isBrightOrange ? TrafficLightColors.orange["shadow"] : ""}
            />
            <Balls
              color={
                TrafficLightColors.green[
                  isBrightGreen ? "brightColor" : "color"
                ]
              }
              bright={isBrightGreen ? TrafficLightColors.green["shadow"] : ""}
            />
          </TrafficLightContainer>

          <TextCounter>
            <p>{counter}</p>
          </TextCounter>
        </TrafficLightWrapper>
      </TrafficWrapper>
    </Fragment>
  );
};

export default TrafficLight;
