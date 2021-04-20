import styled from "@emotion/styled";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const IconWrapper= styled.i<{
  border?: string;
  shadow?: string;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;

  ${(props: any) => twinStyles(props)};
`;
