import * as React from "react";
import { useEffect, useRef } from "react";
import Video from "../../components/Video";
import { ClassContainer, ClassHeaderContainer } from "./class.styled";
import { useLocation } from "react-router-dom";

import Label from "storybook-gamification6/atomic/atoms/Label";
import Button from "storybook-gamification6/atomic/atoms/Button";
import {
  EShadowType,
  EFontWeight,
  EWithType,
  EHeightType,
  EBorderType,
} from "storybook-gamification6/core/domain/enums";

export interface IClassPageProps {}

const ClassPage = () => {
  let location: any = useLocation();
  const childRef = useRef();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <ClassContainer>
      <ClassHeaderContainer>
        <Label
          fontWeight={EFontWeight.BOLD}
          shadowType={EShadowType.LARGE}
          textColor={"#01c5c4"}
          children={`Mira la clase sobre: ${location.state.classContent.theme.name}`}
          borderColor={"transparent"}
          backgroundColor={"transparent"}
          hasPadding={true}
          isLink={false}
        />
        <Button
          children={"Siguiente"}
          textColor={"white"}
          borderColor={"#7f9cf5"}
          backgroundColor={"#7f9cf5"}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
      </ClassHeaderContainer>
      {location && location.state && (
        <Video
          urlVideo={location.state.classContent.content.video_url}
          ref={childRef}
        />
      )}
    </ClassContainer>
  );
};

export default ClassPage;
