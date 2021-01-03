import React from 'react';
import Label from '../../atomic/atoms/Label';
import Button from '../../atomic/atoms/Button';
import Input from '../../atomic/atoms/Input';
import {
  CustomForm,
  FormBody,
  FormWrapper,
  CustomBox,
  BoxField,
  BoxLabel,
  BoxInput,
  BoxButton,
} from './form.styled';
import {
  EBorderType,
  EFontWeight,
  EInputType,
  EShadowType,
  ETextAlign,
  ETextFieldType,
  EWithType,
} from '../../core/domain/enums';

export const Form = (args : any) => (
  <CustomBox>
    <CustomForm>
      <FormWrapper>
        <FormBody>
          <Label
            children={'LOGIN'}
            hasPadding={true}
            textAlign={ETextAlign.CENTER}
            fontWeight={EFontWeight.SEMIBOLD}
          />

          <BoxField>
            <BoxLabel>
              <Label children={'CODIGO'} hasPadding={false} />
            </BoxLabel>
            <BoxInput>
              <Input
                placeholder={'Ingresar tu codigo'}
                inputType={EInputType.TEXTFIELD}
                borderType={EBorderType.PILLSHAPE}
                textFieldType={ETextFieldType.NUMBER}
                widthType={EWithType.LARGE}
                hasPadding={true}
              />
            </BoxInput>
          </BoxField>
          <BoxField>
            <BoxLabel>
              <Label children={'CONTRASEÑA'} hasPadding={false} />
            </BoxLabel>
            <BoxInput>
              <Input
                placeholder={'Ingresar tu contraseña'}
                inputType={EInputType.TEXTFIELD}
                borderType={EBorderType.PILLSHAPE}
                textFieldType={ETextFieldType.PASSWORD}
                widthType={EWithType.LARGE}
                hasPadding={true}
              />
            </BoxInput>
          </BoxField>

          <BoxButton>
            <Button
              children={'LOGIN'}
              borderType={EBorderType.PILLSHAPE}
              shadowType={EShadowType.MEDIUM}
            />
            <Button children={'Registrar'} />
          </BoxButton>
        </FormBody>
      </FormWrapper>
    </CustomForm>
  </CustomBox>
);

export default Form;
