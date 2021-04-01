import React, { useState } from "react";
import Button from "../../atomic/atoms/Button";
import { EWithType, EHeightType, EShadowType, EBorderType } from "../../core/domain/enums";
import Modal from "../../atomic/molecules/Modal";

export default {
  title: "Molecules/Modal",
  component: Modal,
  argTypes: {
    textItem: { control: "text" },
    subTextItem: { control: "text" },
  },
};

export const ModalBasic = (args: any) => {
    const [isVisible,setIsVisible] = useState(false);

    const handleToggle = () => {
      setIsVisible(!isVisible);
    }

    return (
        <div>
           <Button
            onClick={handleToggle}
            children={"Trigger Modal"}
            textColor={"#7f9cf5"}
            borderColor={"white"}
            backgroundColor={"white"}
            widthType={EWithType.SMALL}
            heigthType={EHeightType.SMALL}
            shadowType={EShadowType.XLARGE}
            borderType={EBorderType.PILLSHAPE}
          />
          <Modal {...args} isVisible={isVisible} onClose={handleToggle}>
            <p>Hola como estas</p>
          </Modal>
        </div>
      );
}

ModalBasic.args = {
  title: "Envíanos tu solucion 😄"
};

ModalBasic.storyName = "Modal Basic";
