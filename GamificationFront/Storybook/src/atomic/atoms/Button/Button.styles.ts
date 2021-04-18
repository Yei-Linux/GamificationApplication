import styled from "@emotion/styled";
import { ButtonType } from "../../../core/domain/types";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const ButtonWrapper = styled.button<{
  typeStyle?: ButtonType;
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;

  ${(props: any) => twinStyles(props)};
`;
