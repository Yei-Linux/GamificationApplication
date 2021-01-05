import React from "react";
import { TaskResponseContainer } from "./taskresponse.styled";
import {
  EShadowType,
  EWithType,
  EBorderType,
  EHeightType,
} from "storybook-gamification9/core/domain/enums";
import Button from "storybook-gamification9/atomic/atoms/Button";
export interface ITaskResponseProps {}

const TaskResponse = ({}: ITaskResponseProps) => {
  return (
    <TaskResponseContainer>
      <Button
        children={"Enviar Solución"}
        textColor={"white"}
        borderColor={"#7f9cf5"}
        backgroundColor={"#7f9cf5"}
        widthType={EWithType.SMALL}
        heigthType={EHeightType.SMALL}
        shadowType={EShadowType.XLARGE}
        borderType={EBorderType.PILLSHAPE}
      />
    </TaskResponseContainer>
  );
};

export default TaskResponse;
