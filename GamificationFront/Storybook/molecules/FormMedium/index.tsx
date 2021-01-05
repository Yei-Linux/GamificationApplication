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
    fullname: '',
    lastname: '',
    email: '',
    code: '',
    password: '',
    program: '',
    especialitation: '',
    language: '',
  });
  const [lenguage, setLenguage] = useState({
    value: '',
  });

  const [especiality, setEspeciality] = useState({
    value: '',
  });

  const [program, setProgram] = useState({
    value: '',
  });
  const addUser = (e): void => {
    e.preventDefault();
    // console.log(user);
    const object = { ...user };
    object.especialitation = especiality.value;
    object.program = program.value;
    object.language = lenguage.value;
    handlerGetData(object);
  };

  const handlerAddUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlerLenguage = (e) => {
    setLenguage({
      value: e.target.value,
    });
  };
  const handlerEspeciality = (e) => {
    setEspeciality({
      value: e.target.value,
    });
  };

  const handlerProgram = (e) => {
    setProgram({
      value: e.target.value,
    });
  };

  return (
    <CustomBox>
      <CustomForm>
        <FormWrapper>
          <FormBody>
            <Label
              children={'REGISTRAR'}
              hasPadding={true}
              textAlign={ETextAlign.CENTER}
              fontWeight={EFontWeight.SEMIBOLD}
            />
            <BoxField>
              <BoxLabel>
                <Label children={'NOMBRE'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  placeholder={'Ingresar su nombre'}
                  inputType={EInputType.TEXTFIELD}
                  borderType={EBorderType.PILLSHAPE}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  name="fullname"
                  onChange={handlerAddUser}
                />
              </BoxInput>
            </BoxField>
            <BoxField>
              <BoxLabel>
                <Label children={'APELLIDOS'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  placeholder={'Ingresar tus apellidos'}
                  inputType={EInputType.TEXTFIELD}
                  borderType={EBorderType.PILLSHAPE}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  name="lastname"
                  onChange={handlerAddUser}
                />
              </BoxInput>
            </BoxField>
            <BoxField>
              <BoxLabel>
                <Label children={'CORREO'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  placeholder={'Ingresar tu correo'}
                  inputType={EInputType.TEXTFIELD}
                  borderType={EBorderType.PILLSHAPE}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  name="email"
                  onChange={handlerAddUser}
                />
              </BoxInput>
            </BoxField>
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
                  name="code"
                  onChange={handlerAddUser}
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
                  name="password"
                  onChange={handlerAddUser}
                />
              </BoxInput>
            </BoxField>
            <BoxField>
              <BoxLabel>
                <Label
                  children={'LENGUAJE DE PROGRAMACION'}
                  hasPadding={false}
                />
              </BoxLabel>
              <BoxInput>
                <Input
                  inputType={EInputType.SELECT}
                  borderType={EBorderType.ROUNDED}
                  textFieldType={ETextFieldType.TEXT}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  onChange={handlerProgram}
                  selectItems={[
                    {
                      key: '1',
                      value: 'Javascript',
                    },
                    {
                      key: '2',
                      value: 'Python',
                    },
                  ]}
                />
              </BoxInput>
            </BoxField>
            <BoxField>
              <BoxLabel>
                <Label children={'ESPECIALIZACION'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  inputType={EInputType.SELECT}
                  borderType={EBorderType.ROUNDED}
                  textFieldType={ETextFieldType.TEXT}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  onChange={handlerEspeciality}
                  selectItems={[
                    {
                      key: '1',
                      value: 'Data Science',
                    },
                    {
                      key: '2',
                      value: 'Frontend Developer',
                    },
                  ]}
                />
              </BoxInput>
            </BoxField>
            <BoxField>
              <BoxLabel>
                <Label children={'IDIOMA'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  inputType={EInputType.SELECT}
                  borderType={EBorderType.ROUNDED}
                  textFieldType={ETextFieldType.TEXT}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  onChange={handlerLenguage}
                  selectItems={[
                    {
                      key: '1',
                      value: 'Ingles',
                    },
                    {
                      key: '2',
                      value: 'Español',
                    },
                  ]}
                />
              </BoxInput>
            </BoxField>
            <BoxButton>
              {/* <a href={'/signin'}> */}
              <Button
                onClick={addUser}
                children={'REGISTRAR'}
                borderType={EBorderType.PILLSHAPE}
                shadowType={EShadowType.MEDIUM}
              />
              {/* </a> */}
              <a href={'/signin'}>
                <Button children={'Volver'} />
              </a>
            </BoxButton>
          </FormBody>
        </FormWrapper>
      </CustomForm>
    </CustomBox>
  );
};
export default Form;
