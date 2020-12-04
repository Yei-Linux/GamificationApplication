import React from "react";
import { EBorderType, EHeightType, EShadowType, EWithType } from "../../../../../core/domain/enums";
import { ItemSelect } from "../../../../../core/domain/interfaces";
import { InputGroup, CustomInput, CustomSelect, CustomOption } from "../../input.styled";

export interface ISelectField {
  placeholder?: string;
  hasPadding?: boolean;
  borderType?: EBorderType;
  borderColor?: string;
  shadowType?: EShadowType;
  heigthType?: EHeightType;
  widthType?: EWithType;
  items: ItemSelect[];
}

const SelectField = ({
  placeholder,
  hasPadding,
  borderType,
  borderColor,
  shadowType,
  heigthType,
  widthType,
  items,
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
      >
        {items.length > 0 &&
          items.map((item: ItemSelect, index: number) => (
            <CustomOption key={item["value"]} value={item["value"]}>
              {item["value"]}
            </CustomOption>
          ))}
      </CustomSelect>
    </InputGroup>
  );
};

SelectField.defaultProps = {
  placeholder: "",
};

export default SelectField;
