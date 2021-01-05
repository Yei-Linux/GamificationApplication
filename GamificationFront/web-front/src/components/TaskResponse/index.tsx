import React, { useState } from "react";
import { TaskResponseContainer } from "./taskresponse.styled";
import {
  EShadowType,
  EWithType,
  EBorderType,
  EHeightType,
} from "storybook-gamification11/core/domain/enums";
import Button from "storybook-gamification11/atomic/atoms/Button";
import Editor from "../Editor";
export interface ITaskResponseProps {}

const TaskResponse = ({}: ITaskResponseProps) => {
  const [taskResponse,setTaskResponse] = useState("");

  const handleResponseChange = (value : string) => {
    setTaskResponse(value);
  }

  const handleSubmitResponse = () => {
    console.log(taskResponse);
  }

  return (
    <TaskResponseContainer>
      <Editor
        language="javascript"
        displayName="JS"
        value={""}
        onChange={handleResponseChange}
      />
      <Button
        onClick={handleSubmitResponse}
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
