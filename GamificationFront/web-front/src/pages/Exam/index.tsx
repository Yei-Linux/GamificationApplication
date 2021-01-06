import React, { useState, useEffect, Fragment } from "react";
import Editor from "../../components/Editor";
import Exercise from "../../components/Exercise";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GetExamResponse, PostStudentAnswersOfExamRequest, QuestionResponse } from "../../models/exams";
import { getQuestionsExam, insertAnswerStudentOfExam } from "../../services/exams.service";
import {
  ButtonContainer,
  ExamContainer,
  ExerciseContainer,
} from "./exam.styled";
import Button from "storybook-gamification11/atomic/atoms/Button";

import {
  EShadowType,
  EFontWeight,
  EWithType,
  EHeightType,
  EBorderType,
} from "storybook-gamification11/core/domain/enums";
import { useHistory } from "react-router-dom";
import { getLocalStorageItemValue } from "../../helpers/managment-data.helper";
import { insertRoadMapStudent } from "../../services/roadmap.service";
import { PostRoadMapStudentRequest } from "../../models/roadmap";

const Exam = (): JSX.Element => {
  let history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [answers,setAnswers] = useState({});

  useEffect(() => {
    handleGetQuestionExam();
  }, []);

  useEffect(()=>{
    questions.length>0 && buildingAnswerStructure()
  },[questions]);

  const buildingAnswerStructure = () => {
    let answerStructure = {}
    questions.map((question: QuestionResponse) => {
      answerStructure[question.id] = "";
    })
    setAnswers(answerStructure);
  }

  const handleGetQuestionExam = async () => {
    let response: GetExamResponse = await getQuestionsExam({
      themeId: "73b34ecc-a367-42ef-bb66-1071da349fcb",
      examTypeId: "9f8cd945-b262-427b-a81c-881f38801cc7",
      levelId: "9f8cd945-b262-427b-a81c-881f38801cc7",
    });
    setQuestions(response.questions);
  };

  const buildingAnswersStudentRequest = () : PostStudentAnswersOfExamRequest => {
    return {
      userEmail: getLocalStorageItemValue("user_info")["personInformation"]["email"],
      retry: 1,
      answers: Object.keys(answers).map((questionId: string) => {
        let questionFound = findQuestionById(questionId);
        return {
          studentAnswerText: answers[questionId],
          duration: 15,
          questionExamId: questionFound.examQuestionId,
          optionId: questionFound.options[0].id
        }
      })
    }
  }

  const buildingRoadMapStudentRequest = () : PostRoadMapStudentRequest=> {
    return {
      studentEmail: getLocalStorageItemValue("user_info")["personInformation"]["email"],
      roadMap: Object.keys(answers).map((questionId: string, index: number) => {
        let questionFound = findQuestionById(questionId);
        return {
          themeId: questionFound.theme.id,
          studyMethodId: "d5b57645-870c-43f4-baab-c982bf6c7426",
          order: index
        }
      })
    }
  }

  const findQuestionById= (questionId: string) : QuestionResponse=> {
    let questionFound = questions.filter((question: QuestionResponse) => question.id == questionId);
    return questionFound[0];
  }

  const handleSubmitAnswers = async () => {
    await insertAnswerStudentOfExam(buildingAnswersStudentRequest());
    await insertRoadMapStudent(buildingRoadMapStudentRequest());
    handleGoHome();
  }

  const handleGoHome = () => {
    history.push({
      pathname: "/courses",
    });
  };

  const handleSetAnswerQuestion = (id,value) => {
    setAnswers({...answers,[id]:value});
  }

  return (
    <ExamContainer>
      {questions.map((question: QuestionResponse) => (
        <Exercise id={question.id} question={question.text} handleSetAnswerQuestion={handleSetAnswerQuestion}/>
      ))}
      <ButtonContainer>
        <Button
          onClick={handleSubmitAnswers}
          children={"Enviar Respuestas"}
          textColor={"#7f9cf5"}
          borderColor={"white"}
          backgroundColor={"white"}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
      </ButtonContainer>
    </ExamContainer>
  );
};

export default Exam;
