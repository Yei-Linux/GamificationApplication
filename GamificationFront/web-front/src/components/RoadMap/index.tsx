import * as React from 'react';
import { useEffect, useState } from 'react';
import { RoadMapResponse } from '../../models/roadmap';
import { getRoadMapByStudent } from '../../services/roadmap.service';
import {
  ImageBackground,
  ItemContainer,
  ParagraphFirst,
  ParagraphSecond,
  RoadMapContainer,
} from './roadmap.styled';

import FlatItem from 'storybook-gamification1/atomic/atoms/FlatItem';
import { isParNumber } from '../../helpers/managment-data.helper';

export interface IRoadMapProps {
  courseId: string;
  handleCourseSelect: any;
}

const RoadMap = ({ courseId, handleCourseSelect }: IRoadMapProps) => {
  const [roadMapStudent, setRoadMapStudent]: any = useState([]);
  useEffect(() => {
    handleGetRoadMapByStudent();
  }, []);

  const handleGetRoadMapByStudent = async (): Promise<void> => {
    let data: RoadMapResponse[] = await getRoadMapByStudent({
      studentEmail: 'jesus@gmail.com',
      courseId,
    });
    data && setRoadMapStudent(data);
  };

  return (
    <RoadMapContainer>
      <ImageBackground>
        {roadMapStudent.map((classItem: RoadMapResponse, index: number) => (
          <ItemContainer isLeft={isParNumber(index) ? true : false}>
            <FlatItem
              isActive={!classItem.wasView}
              onClick={() => {
                handleCourseSelect(classItem.class);
              }}
            >
              <ParagraphFirst>
                {isParNumber(index) ? '👽' : '🧠'}
              </ParagraphFirst>
              <ParagraphSecond
                color={isParNumber(index) ? '#01c5c4' : '#01c5c4'}
              >
                {classItem.class.theme.name}
              </ParagraphSecond>
            </FlatItem>
          </ItemContainer>
        ))}
      </ImageBackground>
    </RoadMapContainer>
  );
};

export default RoadMap;
