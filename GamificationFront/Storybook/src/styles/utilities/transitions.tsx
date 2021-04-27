import { css, keyframes } from "@emotion/react";

const SlideBottom = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const SlideTop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-70px);
    opacity: 0;
  }
`;

export const SlideTopAnimation = css`
  z-index: -1;
  animation: ${SlideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const SlideBottomAnimation = css`
  z-index: -1;
  animation: ${SlideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
