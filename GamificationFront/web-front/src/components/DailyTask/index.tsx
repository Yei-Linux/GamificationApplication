import React, { useEffect, useState } from "react";

import Label from "gamification-library/atomic/atoms/Label"
import Button from "gamification-library/atomic/atoms/Button"
import Card from "gamification-library/atomic/molecules/CardMain"
import Modal from "gamification-library/atomic/molecules/Modal"

import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
  EHeightType,
} from "gamification-library/core/domain/enums";
import {
  ButtonContainer,
  DailyTaskContainer,
  Paragrah,
} from "./dailytask.styled";

import TaskResponse from "../TaskResponse";
import { GetExamResponse, PostStudentAnswersOfExamRequest, QuestionResponse } from "../../models/exams";
import { getQuestionsExam, insertAnswerStudentOfExam } from "../../services/exams.service";
import { getLocalStorageItemValue } from "../../helpers/managment-data.helper";

export interface IDailyTaskProps {}

const DailyTask = ({}: IDailyTaskProps) => {
  const [fadeTypeInput, setFadeTypeInput] = useState(false);
  const [question, setQuestion] = useState<QuestionResponse>(null);

  useEffect(() => {
    validateAndGetDailyTask();
  }, []);

  const handleToggle = () => {
    setFadeTypeInput(!fadeTypeInput);
  };

  const validateAndGetDailyTask = async () => {
    let dailyTaskValueLS = getLocalStorageItemValue("daily_task");
    if (isTimeToGetNewTask()) {
      await handleGetDailyQuestionExam();
    } else {
      !dailyTaskValueLS || dailyTaskValueLS == undefined
        ? await handleGetDailyQuestionExam()
        : setQuestion(dailyTaskValueLS["task"]);
    }
  };

  const isTimeToGetNewTask = () => {
    return false;
  };

  const handleGetDailyQuestionExam = async () => {
    let response: GetExamResponse = await getQuestionsExam({
      themeId: "73b34ecc-a367-42ef-bb66-1071da349fcb",
      examTypeId: "9f8cd945-b262-427b-a81c-881f38801cc7",
      levelId: "9f8cd945-b262-427b-a81c-881f38801cc7",
    });
    setQuestion(response.questions[0]);
    localStorage.setItem(
      "daily_task",
      JSON.stringify({ date: new Date(), task: response.questions[0] })
    );
  };

  const handleSendResponseTask = async (response : string) => {
    console.log("???");
    response && await insertAnswerStudentOfExam(buildingAnswersStudentRequest(response));
  }

  const buildingAnswersStudentRequest = (response : string) : PostStudentAnswersOfExamRequest => {
    return {
      userEmail: getLocalStorageItemValue("user_info")["personInformation"]["email"],
      retry: 1,
      answers: [{
          studentAnswerText: response,
          duration: 15,
          questionExamId: question.examQuestionId,
          optionId: question.options[0].id
        }]
      }
  }

  return (
    <DailyTaskContainer>
      <Card
        isCustom={true}
        backgroundColor={"#adeecf"}
        shadowType={EShadowType.MEDIUM}
        borderType={EBorderType.ROUNDED}
        widthType={EWithType.LARGE}
      >
        <Label
          fontWeight={EFontWeight.BOLD}
          textColor={"white"}
          children={`MI TAREA DIARIA`}
          borderColor={"transparent"}
          backgroundColor={"transparent"}
          hasPadding={true}
          isLink={false}
        />
      </Card>

      {question && (
        <Card
          isCustom={true}
          backgroundColor={"white"}
          shadowType={EShadowType.MEDIUM}
          borderType={EBorderType.ROUNDED}
        >
          <Paragrah>
            <div
              dangerouslySetInnerHTML={{
                __html: question.text,
              }}
            ></div>
          </Paragrah>
        </Card>
      )}

      <ButtonContainer>
        <Button
          onClick={handleToggle}
          children={"Añadir Solución"}
          textColor={"white"}
          borderColor={"#7f9cf5"}
          backgroundColor={"#7f9cf5"}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
      </ButtonContainer>

      <Modal
        textHeader={"Envíanos tu solucion 😄"}
        fadeTypeInput={fadeTypeInput}
        onClose={handleToggle}
      >
        <TaskResponse handleSendResponseTask={handleSendResponseTask}/>
      </Modal>
    </DailyTaskContainer>
  );
};

export default DailyTask;
