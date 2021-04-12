import React from "react";
import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label";
import {
  EBorderType,
  EFontWeight,
  EHeightType,
  EShadowType,
  EWithType,
} from "../../../core/domain/enums";
import {
  ListItemContainer,
  ChildContainer,
  IconArrow,
  IconContainer,
  TextContainer,
} from "./listitem.styled";

import ArrowRight from "./assets/arrowRight.svg";

export interface IListItem {
  /**
   * Icon of left item
   */
  children: React.ReactNode;
  /**
   * Text of ltem
   */
  textItem: string;
  /**
   * SubText of ltem
   */
  subTextItem: string;
  /**
   * Handle click on arrow
  */
 onClick?: (courseId: any)=>void;
}

const ListItem = ({ children, textItem, subTextItem, onClick }: IListItem) => {
  return (
    <ListItemContainer>
      <ChildContainer>
        <IconContainer>
          <Icon
            widthType={EWithType.MINSMALL}
            heigthType={EHeightType.SMALL}
            borderColor={"#00dfff"}
            backgroundColor={"#00dfff"}
            shadowType={EShadowType.MEDIUM}
            borderType={EBorderType.CIRCLE}
            hasPadding={true}
          >
            {children}
          </Icon>
        </IconContainer>

        <TextContainer>
          <Label
            fontWeight={EFontWeight.BOLD}
            textColor={"black"}
            children={textItem}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            hasPadding={true}
            isLink={false}
          />
          <Label
            fontWeight={EFontWeight.NORMAL}
            textColor={"#6C7486"}
            children={subTextItem}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            hasPadding={false}
            isLink={false}
          />
        </TextContainer>
        <IconArrow onClick={onClick}>
          <Icon
            widthType={EWithType.MINSMALL}
            heigthType={EHeightType.SMALL}
            borderColor={"transparent"}
            backgroundColor={"transparent"}
            borderType={EBorderType.CIRCLE}
            hasPadding={true}
          >
            <img
              style={{ height: "30px", width: "30px" }}
              src={ArrowRight}
              alt="arrowright"
            />
          </Icon>
        </IconArrow>
      </ChildContainer>
    </ListItemContainer>
  );
};

export default ListItem;
