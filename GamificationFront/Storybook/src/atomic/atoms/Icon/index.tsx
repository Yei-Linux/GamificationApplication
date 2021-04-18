import React from "react";
import '../../../styles/iconpack.svg';

import { EWithType } from "../../../core/domain/enums";
import Svg from "./components/Svg";
import Use from "./components/Use";

interface IIcon {
  /**
   * Fill Icon
   */
  fill?: string;
  /**
   * Icon id
   */
  id: string;
  /**
   * Size icon
   */
  size?: string;
  /**
   * View Box of icon
   */
  viewBox?: string;
}

const Icon = ({
  fill = "none",
  id = "medal",
  size = "16px",
  viewBox = "0 0 16 16",
}: IIcon) => {
  return (
    <Svg fill={fill} width={size} height={size} viewBox={viewBox}>
      <Use id={id} />
    </Svg>
  );
};

Icon.defaultProps = {
  backgroundColor: "white",
  borderColor: "black",
  widthType: EWithType.NORMAL,
};

export default Icon;
