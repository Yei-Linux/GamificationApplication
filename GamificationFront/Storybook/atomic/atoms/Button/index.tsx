import React from 'react';
import {
  EBorderType,
  EHeightType,
  EShadowType,
  EWithType,
} from '../../../core/domain/enums';
import {
  CustomButton,
  ButtonContainer,
  ButtonIconContainer,
} from './button.styled';

export interface IButton {
  /**
   * Content Button to show
   */
  children: string;
  /**
   * Background Color of Button
   */
  backgroundColor?: string;
  /**
   * Text Color of Button
   */
  textColor?: string;
  /**
   * Border Color of Button
   */
  borderColor?: string;
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
  /**
   * Indicate if button will has an icon or not
   */
  hasIcon?: boolean;
  /**
   * Icon element to show in button
   */
  iconDiv?: React.ReactNode;
  /**
   *
   */
  onClick?: any;
}

const Button = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
  borderType,
  shadowType,
  widthType,
  heigthType,
  iconDiv,
  hasIcon,
  onClick,
}: IButton) => {
  return (
    <ButtonContainer>
      {hasIcon && <ButtonIconContainer>{iconDiv}</ButtonIconContainer>}

      <CustomButton
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        shadowType={shadowType}
        borderType={borderType}
        widthType={widthType}
        heigthType={heigthType}
        type="submit"
        onClick={onClick}
      >
        {children}
      </CustomButton>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  backgroundColor: 'white',
  textColor: 'black',
  borderColor: 'black',
  hasIcon: false,
};

export default Button;
