import React, { Fragment } from "react";
import { EBorderType, ETextFieldType } from "../../../../../core/domain/enums";
import { ItemSelect } from "../../../../../core/domain/interfaces";
import { InputGroup, CustomInput, CustomSelect } from "../../input.styled";

export interface ISelectField {
  placeholder?: string;
  hasPadding?: boolean;
  borderType?: EBorderType;
  borderColor?: string;
  items: ItemSelect[];
}

const SelectField = ({
  placeholder,
  hasPadding,
  borderType,
  borderColor,
  items,
}: ISelectField) => {
  return (
    <InputGroup>
      <CustomSelect
        borderColor={borderColor}
        borderType={borderType}
        hasPadding={hasPadding}
        placeholder={placeholder}
      >
        {items.length > 0 &&
          items.map((item: ItemSelect, index: number) => (
            <option key={item["value"]} value={item["value"]}>
              {item["value"]}
            </option>
          ))}
      </CustomSelect>
    </InputGroup>
  );
};

SelectField.defaultProps = {
  placeholder: "",
};

export default SelectField;
