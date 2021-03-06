import * as React from "react";
import { useEffect, useRef } from "react";
import Video from "../../components/Video";
import { ClassContainer, HeaderClass } from "./class.styled";
import { useLocation } from "react-router-dom";

import Label from "gamification-library/atomic/atoms/Label"
import Button from "gamification-library/atomic/atoms/Button"
import Card from "gamification-library/atomic/molecules/CardMain"

import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
  EHeightType,
} from "gamification-library/core/domain/enums";

export interface IClassPageProps {}

const ClassPage = () => {
  let location: any = useLocation();
  const childRef = useRef();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <ClassContainer>
      <Card
        isCustom={true}
        backgroundColor={"#adeecf"}
        shadowType={EShadowType.MEDIUM}
        borderType={EBorderType.ROUNDED}
        widthType={EWithType.FULL}
      >
        <HeaderClass>
          <Label
            fontWeight={EFontWeight.BOLD}
            textColor={"white"}
            children={`Mira la clase sobre: ${location.state.classContent.theme.name}`}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            hasPadding={true}
            isLink={false}
          />
          <Button
            children={"Siguiente"}
            textColor={"#7f9cf5"}
            borderColor={"white"}
            backgroundColor={"white"}
            widthType={EWithType.SMALL}
            heigthType={EHeightType.SMALL}
            shadowType={EShadowType.XLARGE}
            borderType={EBorderType.PILLSHAPE}
          />
        </HeaderClass>
      </Card>
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
