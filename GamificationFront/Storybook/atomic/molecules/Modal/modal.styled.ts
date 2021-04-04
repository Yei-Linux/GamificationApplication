import styled from "@emotion/styled";
import { getAnimationModal } from "../../../core/utils/emotionanimation.util";

export const ModalWrapper = styled.div<{ isVisible: boolean }>`
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);

  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: visibility 0.2s linear;
`;

export const ModalContainer = styled.div<{
  isVisible: boolean;
  animationType: "top" | "center";
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 500px;
  margin: 40px auto;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  animation: ${(props) =>
      getAnimationModal(props.animationType, props.isVisible)}
    0.2s linear;
  transition: visibility 0.2s linear;
`;

export const BoxDialog = styled.div`
  z-index: 1050;
  width: 100%;
  background-color: #fefefe;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
`;

export const BoxHeader = styled.div`
  height: 48px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c7c7c7;
  font-family: monospace;
`;

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 25px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: gray;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const BoxContent = styled.div`
  padding: 24px;
  width: 100%;
`;
