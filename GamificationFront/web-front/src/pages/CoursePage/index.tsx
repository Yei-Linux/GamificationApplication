import React, { Fragment, useEffect, useState } from 'react';
import { GetCourseByStudentResponse } from '../../models/courses';
import { getCoursesByStudent } from '../../services/courses.service';
import {
  CoursesContainer,
  LeftContainer,
  ParentContainer,
  RightContainer,
  TitleContainer,
} from './courses.styled';

import Card from "storybook-gamification9/molecules/CardMain";
import ListItem from "storybook-gamification9/molecules/ListItem";
import { useHistory } from "react-router-dom";
import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
} from "storybook-gamification9/core/domain/enums";
import Label from "storybook-gamification9/atomic/atoms/Label";
import Profile from "../../components/Profile";
import DailyTask from "../../components/DailyTask";

export interface ICourseProps {}

const CoursePage = ({}: ICourseProps) => {
  const [courses, setCourses]: any = useState([]);
  let history = useHistory();

  useEffect(() => {
    handleGetCourses();
  }, []);

  const handleGetCourses = async (): Promise<void> => {
    let data: GetCourseByStudentResponse[] = await getCoursesByStudent();
    data && setCourses(data);
  };

  const handleClickArrow = (courseId: string): void => {
    history.push({
      pathname: '/roadmap',
      state: { courseId: courseId },
    });
  };

  return (
    <Fragment>
      <ParentContainer>
        <LeftContainer>
          <DailyTask />
        </LeftContainer>

        <RightContainer>
          <TitleContainer>
            <Card
              isCustom={true}
              backgroundColor={'#adeecf'}
              shadowType={EShadowType.MEDIUM}
              borderType={EBorderType.ROUNDED}
              widthType={EWithType.LARGE}
            >
              <Label
                fontWeight={EFontWeight.BOLD}
                textColor={'white'}
                children={`MIS CURSOS`}
                borderColor={'transparent'}
                backgroundColor={'transparent'}
                hasPadding={true}
                isLink={false}
              />
            </Card>
          </TitleContainer>

          <CoursesContainer>
            {courses.map((course: GetCourseByStudentResponse) => (
              <ListItem
                textItem={course.name}
                subTextItem={course.tutor.fullName}
                onClick={() => handleClickArrow(course.courseId)}
              >
                <img
                  style={{ height: '30px', width: '30px' }}
                  src={
                    'https://icons-for-free.com/iconfiles/png/512/learn+pencil+student+study+icon-1320166024086045076.png'
                  }
                  alt="roundLogo"
                />
              </ListItem>
            ))}
          </CoursesContainer>

          <Profile />
        </RightContainer>
      </ParentContainer>
    </Fragment>
  );
};

export default CoursePage;
