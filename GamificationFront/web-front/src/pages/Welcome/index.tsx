import CardWelcome from "gamification-library/atomic/molecules/CardMain"

import {
  EShadowType,
  EWithType,
  EBorderType,
  EHeightType,
} from "gamification-library/core/domain/enums";
import Button from "gamification-library/atomic/atoms/Button"
import { BoxGeneral, BoxUnac, CustomBox } from './welcome.styled';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();

  return (
    <CustomBox>
      <CardWelcome isCustom={true}>
        <BoxUnac>
          <Button
            backgroundColor={'#752E6E'}
            textColor={'#fff'}
            borderType={EBorderType.PILLSHAPE}
            widthType={EWithType.SMALL}
            heigthType={EHeightType.SMALL}
            shadowType={EShadowType.XLARGE}
            onClick={() => history.push('/signin')}
          >
            Miembro Unac
          </Button>
        </BoxUnac>
      </CardWelcome>
      <CardWelcome isCustom={true}>
        <BoxGeneral>
          <Button
            backgroundColor={'#752E6E'}
            textColor={'#fff'}
            widthType={EWithType.SMALL}
            heigthType={EHeightType.SMALL}
            shadowType={EShadowType.XLARGE}
            borderType={EBorderType.PILLSHAPE}
            onClick={() => history.push('/signin')}
          >
            Publico General
          </Button>
        </BoxGeneral>
      </CardWelcome>
    </CustomBox>
  );
};
export default Welcome;
