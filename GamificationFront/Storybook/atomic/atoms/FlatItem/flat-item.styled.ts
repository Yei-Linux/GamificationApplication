import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  generateShadowProps,
  generateBorderTypeProps,
  generateWidthTypeProps,
  generateHeightTypeProps,
} from "../../../core/utils/twin.util";

import { keyframes } from "@emotion/core";

//TODO: Refactor
const pulseOneAnimation = keyframes`
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    60% {
        -webkit-transform: scale(.9);
        opacity: .2;
    }

    70% {
        -webkit-transform: scale(1.1);
        opacity: .35;
    }

    80% {
        -webkit-transform: scale(1.25);
        opacity: .2;
    }

    100% {
        -webkit-transform: scale(1.4);
        opacity: 0;
    }
`;

const pulseTwoAnimation = keyframes`
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    40% {
        -webkit-transform: scale(.8);
        opacity: .05;
    }

    50% {
        -webkit-transform: scale(1);
        opacity: .1;
    }

    60% {
        -webkit-transform: scale(1.1);
        opacity: .3;
    }

    80% {
        -webkit-transform: scale(1.2);
        opacity: .1;
    }

    100% {
        -webkit-transform: scale(1.3);
        opacity: 0;
    }
`;

export const FlatContainer = styled.div<{}>`
  position: relative;
  width: fit-content;
`;

export const CustomFlatItem = styled.div<{
    isActive: boolean
}>`
  filter: ${(props : any) => !props.isActive ? `blur(1px)` : `none`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background-size: 180px 180px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;

  -webkit-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2),
    0 0 25px 2px rgba(0, 0, 0, 0.4), inset 0 0 0 15px rgba(255, 255, 155, 0.4);
  -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2),
    0 0 25px 2px rgba(0, 0, 0, 0.4), inset 0 0 0 15px rgba(255, 255, 155, 0.4);
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2),
    0 0 25px 2px rgba(0, 0, 0, 0.4), inset 0 0 0 15px rgba(255, 255, 155, 0.4);

  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
`;

export const FirstPulseContainer = styled.div<{}>`
  position: absolute;
  width: 130px;
  height: 130px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  border: 3px solid rgba(255, 255, 255, 0.1);

  animation: ${pulseOneAnimation} 4s linear infinite;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.6);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const SecondPulseContainer = styled.div<{}>`
  position: absolute;
  width: 130px;
  height: 130px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);

  animation: ${pulseTwoAnimation} 4s linear infinite;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
