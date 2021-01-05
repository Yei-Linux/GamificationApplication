import React from 'react';
import Button from '../../atomic/atoms/Button';
import { EBorderType } from '../../core/domain/enums';
import { CustomBox, BoxGeneral, BoxUnac } from './card.styled';
export const Card = (args) => (
  <CustomBox>
    <BoxUnac>
      <Button
        backgroundColor={'#752E6E'}
        textColor={'#fff'}
        borderType={EBorderType.PILLSHAPE}
      >
        Miembro UNAC
      </Button>
    </BoxUnac>
    <BoxGeneral>
      <Button
        backgroundColor={'#752E6E'}
        textColor={'#fff'}
        borderType={EBorderType.PILLSHAPE}
      >
        Publico General
      </Button>
    </BoxGeneral>
  </CustomBox>
);
export default Card;
