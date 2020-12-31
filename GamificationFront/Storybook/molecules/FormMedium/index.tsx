// import React from 'react';
// import Form from '../../molecules/Form';
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
// import PropTypes from 'prop-types'

export const Form = (args) => (
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
          <BoxField>
            <BoxLabel>
              <Label children={'LENGUAJE DE PROGRAMACION'} hasPadding={false} />
            </BoxLabel>
            <BoxInput>
              <Input
                inputType={EInputType.SELECT}
                borderType={EBorderType.ROUNDED}
                textFieldType={ETextFieldType.TEXT}
                widthType={EWithType.LARGE}
                hasPadding={true}
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
            <Button
              children={'REGISTRAR'}
              borderType={EBorderType.PILLSHAPE}
              shadowType={EShadowType.MEDIUM}
            />
            <Button children={'Volver'} />
          </BoxButton>
        </FormBody>
      </FormWrapper>
    </CustomForm>
  </CustomBox>
);

export default Form;
