import React, { Fragment } from "react";
import {
  EShadowType,
  EBorderType,
  EWithType,
  EHeightType,
} from "../../../core/domain/enums";
import {
  ActionsContainer,
  CardContainer,
  ImageCoverContainer,
  InfoButton,
  InfoContainer,
  SubtitleContainer,
  TextContainer,
  TitleContainer,
} from "./card.styled";

export interface ICard {
  isCustom?: boolean;
  /**
   * Content Card to show
   */
  children: React.ReactNode;
  /**
   * Cover image on card
   */
  cover?: any;
  /**
   * Has main action
   */
  isActionButton?: boolean;
  /**
   * Has main action
   */
  actionText?: boolean;
  /**
   *  Title card
   */
  title?: string;
  /**
   *  Description card
   */
  description?: string;
  /**
   * Background Color of Button
   */
  backgroundColor?: string;
  /**
   * Shadow Type of Button with options
   */
  shadowType?: EShadowType;
  /**
   * Border Type of Button with options
   */
  borderType?: EBorderType;
  /**
   * Width Type of Button with options
   */
  widthType?: EWithType;
  /**
   * Height Type of Button with options
   */
  heigthType?: EHeightType;
}

export const Card = ({
  backgroundColor,
  borderType,
  shadowType,
  widthType,
  isCustom,
  heigthType,
  children,
  cover,
  isActionButton,
  title,
  description,
  actionText,
}: ICard) => (
  <CardContainer
    borderType={borderType}
    backgroundColor={backgroundColor}
    shadowType={shadowType}
    widthType={widthType}
    heigthType={heigthType}
  >
    {isCustom ? (
      <Fragment>{children}</Fragment>
    ) : (
      <Fragment>
        <ImageCoverContainer>{cover}</ImageCoverContainer>
        <TextContainer>
          {title && <TitleContainer>{title}</TitleContainer>}
          {description && <SubtitleContainer>{description}</SubtitleContainer>}

          {isActionButton && (
            <ActionsContainer>
              <InfoContainer>
                <InfoButton>{actionText}</InfoButton>
              </InfoContainer>
            </ActionsContainer>
          )}
        </TextContainer>
      </Fragment>
    )}
  </CardContainer>
);

Card.defaultProps = {
  isCustom: false,
};

export default Card;
