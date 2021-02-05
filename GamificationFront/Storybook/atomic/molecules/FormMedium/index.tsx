import React, { useState } from 'react';
import Label from '../../atoms/Label';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
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
} from '../../../core/domain/enums';

interface MyProps {
  handlerGetData(data): any;
  handlerBack: any;
}

export const Form = ({ handlerGetData, handlerBack }: MyProps) => {
  const [user, setUser] = useState({
    email: '',
    surname:'-',
    age:0,
    password: '',
    userTypeId: '8d12e6e3-e364-4231-9990-b794ebea38c6',
    identifier: '',
    userPosition: 'STUDENT',
    fullName: '',
    lastName: '',
    idiomId: '',
    languageProgrammingId: '',
    specializationId: '',
    collegeId: null,
    coursesId: [''],
  });
  const [idiom, setIdiom] = useState({
    value: '078069b1-d276-4fe0-94d3-d111a05d9583',
  });

  const [especiality, setEspeciality] = useState({
    value: '8dba6cd4-69d1-4a71-bce2-9c68e7579c98',
  });

  const [language, setLanguage] = useState({
    value: 'e5065254-9f3c-4d89-bf8e-977dfdb16019',
  });

  const [course, setCourse] = useState({
    value: '511a2cf7-c4df-4d02-bc80-8a5a38a1970b',
  });

  const addUser = (e): void => {
    e.preventDefault();
    const object = { ...user };
    object.specializationId = especiality.value;
    object.languageProgrammingId = language.value;
    object.idiomId = idiom.value;
    object.coursesId = [course.value];
    handlerGetData(object);
  };

  const handlerAddUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlerIdiom = (e) => {
    const index = e.target.selectedIndex;
    const idIdiom = e.target.options[index].id;
    setIdiom({
      value: idIdiom,
    });
  };
  const handlerEspeciality = (e) => {
    const index = e.target.selectedIndex;
    const idEspeciality = e.target.options[index].id;
    setEspeciality({
      value: idEspeciality,
    });
  };

  const handlerProgram = (e) => {
    const index = e.target.selectedIndex;
    const idLanguage = e.target.options[index].id;
    setLanguage({
      value: idLanguage,
    });
  };
  const handlerCourse = (e) => {
    const index = e.target.selectedIndex;
    const idCourse = e.target.options[index].id;
    setCourse({
      value: idCourse,
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
                  name="fullName"
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
                  name="lastName"
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
                  name="identifier"
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
                <Label children={'CURSOS'} hasPadding={false} />
              </BoxLabel>
              <BoxInput>
                <Input
                  inputType={EInputType.SELECT}
                  borderType={EBorderType.ROUNDED}
                  textFieldType={ETextFieldType.TEXT}
                  widthType={EWithType.LARGE}
                  hasPadding={true}
                  onChange={handlerCourse}
                  selectItems={[
                    {
                      key: '511a2cf7-c4df-4d02-bc80-8a5a38a1970b',
                      value: 'Programacion Estructurada',
                    },
                    {
                      key: '901a2cf7-c4df-4d02-bc80-8a5a38a1970b',
                      value: 'Programacion Orientada a Objetos',
                    },
                  ]}
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
                      key: 'e5065254-9f3c-4d89-bf8e-977dfdb16019',
                      value: 'Javascript',
                    },
                    {
                      key: 'aa1cb247-9642-4f78-a1e9-67ff9e4dfabd',
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
                      key: '3e0b8bb1-7269-4019-83c7-d90d4a926ca2',
                      value: 'Data Science',
                    },
                    {
                      key: '8dba6cd4-69d1-4a71-bce2-9c68e7579c98',
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
                  onChange={handlerIdiom}
                  selectItems={[
                    {
                      key: 'f72d6ea6-a775-4371-9907-5d32180e8061',
                      value: 'Ingles',
                    },
                    {
                      key: '078069b1-d276-4fe0-94d3-d111a05d9583',
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
                <Button
                  children={'Volver'}
                  onClick={() => {
                    handlerBack();
                  }}
                />
              </a>
            </BoxButton>
          </FormBody>
        </FormWrapper>
      </CustomForm>
    </CustomBox>
  );
};
export default Form;
