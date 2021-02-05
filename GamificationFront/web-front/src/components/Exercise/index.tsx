import React from "react";
import Editor from "../../components/Editor";
import { CardWrapper, EditorWrapper, ExerciseContainer } from "./exercise.styled";

import Card from "gamification-library/atomic/molecules/CardMain"
import {
  EShadowType,
  EBorderType,
} from "gamification-library/core/domain/enums";
import { Paragrah } from "../DailyTask/dailytask.styled";

const Exercise = ({ id, question , handleSetAnswerQuestion }): JSX.Element => {
  return (
    <ExerciseContainer>
      <CardWrapper>
        <Card
          isCustom={true}
          backgroundColor={"white"}
          shadowType={EShadowType.MEDIUM}
          borderType={EBorderType.ROUNDED}
        >
          <Paragrah>
            <div
              dangerouslySetInnerHTML={{
                __html: question,
              }}
            ></div>
          </Paragrah>
        </Card>
      </CardWrapper>
      <EditorWrapper>
        <Editor
            language="javascript"
            displayName="JS"
            value={""}
            onChange={(value) => {
                handleSetAnswerQuestion(id,value);
            }}
        />
      </EditorWrapper>
    </ExerciseContainer>
  );
};

export default Exercise;
