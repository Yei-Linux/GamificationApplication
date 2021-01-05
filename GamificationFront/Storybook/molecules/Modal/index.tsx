import React, { useEffect, useState } from "react";
import Label from "../../atomic/atoms/Label";
import { EFontWeight } from "../../core/domain/enums";
import {
  BoxContent,
  BoxDialog,
  BoxHeader,
  CloseButton,
  ModalContainer,
} from "./modal.styled";

interface IModal {
  /**
   * Text Header of modal
   */
  textHeader: string;
  /**
   * Is custom Modal content
   */
  isCustom: boolean;
  /**
   * Content Modal to show
   */
  children: React.ReactNode;
  /**
   * Content Modal to show
   */
  onClose(): any;
  /**
   * Fade transition
   */
  fadeTypeInput: boolean;
}

const Modal = ({ isCustom, children, textHeader, onClose, fadeTypeInput }: IModal) => {
  const [isOpen, setIsOpen] = useState(fadeTypeInput);

  useEffect(()=>{
    setIsOpen(fadeTypeInput);
  },[fadeTypeInput])

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onClose();
  }

  return (
    <ModalContainer isOpen={isOpen}>
      <BoxDialog>
        <BoxHeader>
          <Label
            fontWeight={EFontWeight.BOLD}
            textColor={"black"}
            children={textHeader}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            hasPadding={true}
            isLink={false}
          />
          <CloseButton onClick={handleToggle}>&times;</CloseButton>
        </BoxHeader>
        <BoxContent>{isCustom && children}</BoxContent>
      </BoxDialog>
    </ModalContainer>
  );
};

Modal.defaultProps = {
  isCustom: true,
  fadeTypeInput: false
};

export default Modal;
