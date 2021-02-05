import React, { useState } from "react";
import { TaskResponseContainer } from "./taskresponse.styled";
import Button from "gamification-library/atomic/atoms/Button"
import {
  EShadowType,
  EWithType,
  EBorderType,
  EHeightType,
} from "gamification-library/core/domain/enums";

import Editor from "../Editor";

export interface ITaskResponseProps {
  handleSendResponseTask: any;
}

const TaskResponse = ({handleSendResponseTask}: ITaskResponseProps) => {
  const [taskResponse,setTaskResponse] = useState("");

  const handleResponseChange = (value : string) => {
    setTaskResponse(value);
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
        onClick={handleSendResponseTask(taskResponse)}
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
