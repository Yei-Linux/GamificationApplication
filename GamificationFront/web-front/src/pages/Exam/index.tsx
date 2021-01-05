import React, { useState, useEffect, Fragment } from 'react';
import Editor from '../../components/Editor';
import Exercise from '../../components/Exercise';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { GetExamResponse, QuestionResponse } from '../../models/exams';
import { getQuestionsExam } from '../../services/exams.service';
import { ExerciseContainer } from './exam.styled';
import Button from "storybook-gamification11/atomic/atoms/Button";

import {
  EShadowType,
  EFontWeight,
  EWithType,
  EHeightType,
  EBorderType,
} from "storybook-gamification11/core/domain/enums";
import { useHistory } from 'react-router-dom';


const Exam = (): JSX.Element => {
  let history = useHistory();
  const [questions,setQuestions] = useState([]);

  useEffect(()=>{
    handelGetQuestionExam();
  });

  const handelGetQuestionExam = async () => {
    let response : GetExamResponse = await getQuestionsExam({
      themeId: "73b34ecc-a367-42ef-bb66-1071da349fcb",
      examTypeId: "9f8cd945-b262-427b-a81c-881f38801cc7",
      levelId: "9f8cd945-b262-427b-a81c-881f38801cc7"
    });
    setQuestions(response.questions);
  }

  const handleGoHome = () => {
    history.push({
      pathname: "/courses"
    });
  }

  return (
    <Fragment>
      {
        questions.map((question : QuestionResponse)=>(
          <Exercise  question={question.text} />
        ))
      }
      <Button
      onClick={handleGoHome}
        children={"Enviar Respuestas"}
        textColor={"#7f9cf5"}
        borderColor={"white"}
        backgroundColor={"white"}
        widthType={EWithType.SMALL}
        heigthType={EHeightType.SMALL}
        shadowType={EShadowType.XLARGE}
        borderType={EBorderType.PILLSHAPE}
      />
    </Fragment>
  );
};

export default Exam;
