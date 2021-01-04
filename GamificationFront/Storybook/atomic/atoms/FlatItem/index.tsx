import React, { Fragment } from "react";

import {
  CustomFlatItem,
  FirstPulseContainer,
  FlatContainer,
  SecondPulseContainer,
} from "./flat-item.styled";

interface IFlatItem {
  /**
   * Content to show on FlatItem
   */
  children: React.ReactNode;
    /**
   * Is active FlatItem
   */
  isActive?: boolean;
}

const FlatItem = ({
  children,
  isActive
}: IFlatItem) => {
  return (
    <FlatContainer>
      { isActive && <FirstPulseContainer /> }
      { isActive && <SecondPulseContainer /> }
      <CustomFlatItem isActive={isActive}>
          {children}
      </CustomFlatItem>
    </FlatContainer>
  );
};

FlatItem.defaultProps = {
    isActive: true
};

export default FlatItem;
