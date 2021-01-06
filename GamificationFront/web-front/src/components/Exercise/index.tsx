import React from "react";
import Editor from "../../components/Editor";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GetExamResponse } from "../../models/exams";
import { getQuestionsExam } from "../../services/exams.service";
import { CardWrapper, EditorWrapper, ExerciseContainer } from "./exercise.styled";

import Card from "storybook-gamification11/molecules/CardMain";

import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
  EHeightType,
} from "storybook-gamification11/core/domain/enums";
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
