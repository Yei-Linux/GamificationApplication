import React, { useState } from 'react';
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
interface MyProps {
  handlerGetData(data): any;
}

export const Form = ({ handlerGetData }: MyProps) => {
  const [user, setUser] = useState({
    code: '',
    password: '',
  });

  const addUser = (e): void => {
    e.preventDefault();
    handlerGetData(user);
  };

  const handlerAddUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
                  onChange={handlerAddUser}
                  name={'code'}
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
                  onChange={handlerAddUser}
                  name={'password'}
                />
              </BoxInput>
            </BoxField>

            <BoxButton>
              {/* <a href={'/exercise'}> */}
              <Button
                children={'LOGIN'}
                onClick={addUser}
                borderType={EBorderType.PILLSHAPE}
                shadowType={EShadowType.MEDIUM}
              />
              {/* </a> */}
              <a href={'/signup'}>
                <Button children={'Registrar'} />
              </a>
            </BoxButton>
          </FormBody>
        </FormWrapper>
      </CustomForm>
    </CustomBox>
  );
};
export default Form;
