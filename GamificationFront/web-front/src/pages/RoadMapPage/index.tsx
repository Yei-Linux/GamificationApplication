import React, { Fragment, useEffect } from "react";
import RoadMap from "../../components/RoadMap";
import { useHistory, useLocation } from "react-router-dom";
import { ClassResponse } from "../../models/roadmap";
import Card from "gamification-library/atomic/molecules/CardMain"
import Label from "gamification-library/atomic/atoms/Label"

import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
  EHeightType,
} from "gamification-library/core/domain/enums";
import { TitleContainer } from "./roadmappage.styled";

export interface IRoadMapPage {}

const RoadMapPage = ({}: IRoadMapPage) => {
  let history = useHistory();
  let location: any = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleCourseSelect = (classContent: ClassResponse): void => {
    history.push({
      pathname: "/class",
      state: { classContent },
    });
  };

  return (
    <Fragment>
      <TitleContainer>
        <Card
          isCustom={true}
          backgroundColor={"#adeecf"}
          shadowType={EShadowType.MEDIUM}
          borderType={EBorderType.ROUNDED}
          widthType={EWithType.FULL}
        >
          <Label
            fontWeight={EFontWeight.BOLD}
            textColor={"white"}
            children={`MI ROADMAP ACTUAL`}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            hasPadding={true}
            isLink={false}
          />
        </Card>
      </TitleContainer>

      <RoadMap
        courseId={location.state.courseId}
        handleCourseSelect={handleCourseSelect}
      />
    </Fragment>
  );
};

export default RoadMapPage;
