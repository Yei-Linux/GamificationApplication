import React from "react";

import Button from "gamification-library/atomic/atoms/Button";

import {
  EShadowType,
  EWithType,
  EBorderType,
  EHeightType,
} from "gamification-library/core/domain/enums";

const Login = (): any => {
  return         <Button
  onClick={()=>{}}
  children={"Añadir Solución"}
  textColor={"white"}
  borderColor={"#7f9cf5"}
  backgroundColor={"#7f9cf5"}
  widthType={EWithType.SMALL}
  heigthType={EHeightType.SMALL}
  shadowType={EShadowType.XLARGE}
  borderType={EBorderType.PILLSHAPE}
/>
}
export default Login
