import React from 'react';
import {
  EBorderType,
  EHeightType,
  EShadowType,
  EWithType,
} from '../../../../../core/domain/enums';
import { ItemSelect } from '../../../../../core/domain/interfaces';
import { InputGroup, CustomSelect, CustomOption } from '../../input.styled';

export interface ISelectField {
  placeholder?: string;
  hasPadding?: boolean;
  borderType?: EBorderType;
  borderColor?: string;
  shadowType?: EShadowType;
  heigthType?: EHeightType;
  widthType?: EWithType;
  itemsOf: ItemSelect[];
  value: any;
  onChange: any;
  name: string;
}

const SelectField = ({
  placeholder,
  hasPadding,
  borderType,
  borderColor,
  shadowType,
  heigthType,
  widthType,
  itemsOf,
  value,
  onChange,
  name,
}: ISelectField) => {
  return (
    <InputGroup>
      <CustomSelect
        role="selectfield"
        borderColor={borderColor}
        borderType={borderType}
        hasPadding={hasPadding}
        placeholder={placeholder}
        shadowType={shadowType}
        heigthType={heigthType}
        widthType={widthType}
        onChange={onChange}
        value={value}
        name={name}
      >
        {itemsOf.length > 0 &&
          itemsOf.map((item: ItemSelect, index: number) => (
            <CustomOption
              key={item['key']}
              value={item['key']}
            >
              {item['value']}
            </CustomOption>
          ))}
      </CustomSelect>
    </InputGroup>
  );
};

SelectField.defaultProps = {
  placeholder: '',
};

export default SelectField;
