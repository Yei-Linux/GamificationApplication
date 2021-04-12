import React from "react";
import Label from "../../atoms/Label";
import { EFontWeight } from "../../../core/domain/enums";
import {
  BoxContent,
  BoxDialog,
  BoxHeader,
  CloseButton,
  ModalContainer,
  ModalWrapper,
} from "./modal.styled";

interface IModal {
  /**
   * Text Header of modal
   */
  title: string;
  /**
   * Content Modal to show
   */
  children: React.ReactNode;
  /**
   * Close Modal Event
   */
  onClose(): () => void;
  /**
   * Visible Modal
   */
  isVisible: boolean;
  /**
   * Animation Type Modal
   */
  animationType: "top" | "center";
}

const Modal = ({
  children,
  title,
  onClose,
  isVisible,
  animationType,
}: IModal) => {
  return (
    <ModalWrapper isVisible={isVisible}>
      <ModalContainer animationType={animationType} isVisible={isVisible}>
        <BoxDialog>
          <BoxHeader>
            <Label
              fontWeight={EFontWeight.BOLD}
              textColor={"black"}
              children={title}
              borderColor={"transparent"}
              backgroundColor={"transparent"}
              hasPadding={true}
              isLink={false}
            />
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </BoxHeader>
          <BoxContent>{children}</BoxContent>
        </BoxDialog>
      </ModalContainer>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  isVisible: false,
  animationType: "top",
};

export default Modal;
