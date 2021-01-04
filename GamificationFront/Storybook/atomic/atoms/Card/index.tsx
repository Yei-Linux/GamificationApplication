import React from 'react';
import { EBorderType } from '../../../core/domain/enums';
import Label from '../Label';
import { CardWrapper, CardBody } from './card.styled';

export interface ICard {
  /**
   * Content Button to show
   */
  children: string;
  /**
   * Background Color of Button
   */
  backgroundColor?: string;
  /**
   * Border Color of Button
   */
  borderColor?: EBorderType;
}
// const F
const Card = ({ children }: ICard) => {
  return (
    <CardWrapper>
      <CardBody>{children}</CardBody>
    </CardWrapper>
  );
};
Card.defaultProps = {
  background: 'transparent',
};
