import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { inputStyle } from "../../../styles/utilities/input";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const InputWrapper = styled.div<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  display: flex;
  align-items: center;
  padding-left: 1rem;

  input {
    border: none;
  }

  ${inputStyle()};
  ${(props: any) => twinStyles(props)};
`;

export const InputContainer = styled.input<{
  hasIcon?: boolean;
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  outline: none;
  appearance: none;
  padding-left: 1rem;

  &::placeholder {
    color: ${colorLight.neutral.four};
  }

  ${(props: any) => !props.hasIcon && inputStyle()};
  ${(props: any) => !props.hasIcon && twinStyles(props)};
`;
