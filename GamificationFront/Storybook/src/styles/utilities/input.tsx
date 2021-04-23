import { css } from "@emotion/react";
import { colorLight } from "../theme";

export const inputStyle = () => css`
  border: 1px solid ${colorLight.neutral.five};
  transition: all 0.3s;

  &:focus {
    border: 2px solid ${colorLight.primary.one};
    box-shadow: 0 0 0 2px ${colorLight.primary.oneLight};
  }

  &:hover {
    border: 2px solid ${colorLight.primary.one};
    box-shadow: 0 0 0 2px ${colorLight.primary.oneLight};
  }
`;
