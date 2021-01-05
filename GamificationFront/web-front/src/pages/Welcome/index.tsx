import CardWelcome from 'storybook-gamification11/molecules/CardMain';
import {
  EHeightType,
  EShadowType,
  EWithType,
  EBorderType,
} from 'storybook-gamification11/core/domain/enums';
import Button from 'storybook-gamification11/atomic/atoms/Button';
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
