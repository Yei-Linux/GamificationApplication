import React from 'react';
import Button from '../../atomic/atoms/Button';
import { EBorderType, EHeightType, EWithType } from '../../core/domain/enums';
import { CustomBox, BoxGeneral, BoxUnac } from './card.styled';

export const Card = () => (
  <CustomBox>
    <BoxUnac>
      <a href={'/signin'}>
        <Button
          backgroundColor={'#752E6E'}
          textColor={'#fff'}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          borderType={EBorderType.PILLSHAPE}
        >
          Miembro UNAC
        </Button>
      </a>
    </BoxUnac>
    <BoxGeneral>
      <a href={'/signin'}>
        <Button
          backgroundColor={'#752E6E'}
          textColor={'#fff'}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          borderType={EBorderType.PILLSHAPE}
        >
          Público General
        </Button>
      </a>
    </BoxGeneral>
  </CustomBox>
);
export default Card;
