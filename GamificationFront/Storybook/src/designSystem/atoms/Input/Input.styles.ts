import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const InputContainer = styled.input<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  border: 1px solid ${colorLight.neutral.five};
  outline: none;
  appearance: none;
  padding-left: 1rem;

  &::placeholder {
    color: ${colorLight.neutral.four};
  }

  transition: all .3s;

  &:focus {
    border: 2px solid ${colorLight.primary.one};
    box-shadow: 0 0 0 2px ${colorLight.primary.oneLight};
  }

  &:hover {
    border: 2px solid ${colorLight.primary.one};
    box-shadow: 0 0 0 2px ${colorLight.primary.oneLight};
  }

  ${(props: any) => twinStyles(props)};
`;
