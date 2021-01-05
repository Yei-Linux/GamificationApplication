import React, { useState, useEffect, Fragment } from "react";
import Editor from "../../components/Editor";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GetExamResponse } from "../../models/exams";
import { getQuestionsExam } from "../../services/exams.service";
import { ExerciseContainer } from "./exercise.styled";

import Card from "storybook-gamification11/molecules/CardMain";

import {
    EShadowType,
    EWithType,
    EBorderType,
    EFontWeight,
    EHeightType,
  } from "storybook-gamification11/core/domain/enums";
import { Paragrah } from "../DailyTask/dailytask.styled";

const Exercise = ({ question }): JSX.Element => {
  return (
    <Fragment>
      <ExerciseContainer>
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
        <Editor
          language="javascript"
          displayName="JS"
          value={""}
          onChange={()=>{console.log("d");}}
        />
      </ExerciseContainer>
    </Fragment>
  );
};

export default Exercise;
