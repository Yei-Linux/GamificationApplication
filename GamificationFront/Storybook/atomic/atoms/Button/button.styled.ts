import styled from "@emotion/styled";
import tw from "twin.macro";
import { generateShadowProps, generateBorderTypeProps, generateWidthTypeProps, generateHeightTypeProps } from "../../../core/utils/twin.util";

export const CustomButton = styled.button<{
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderType?: string;
  shadowType?: string;
  widthType?: string;
  heigthType?: string;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;
  color: ${(props : any) => props.textColor};
  background: ${(props : any) => props.backgroundColor};
  border-color: ${(props : any) => props.borderColor};
`;

export const ButtonIconContainer = styled.div<{}>`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`

`