import React from "react";
import Button from '../../Storybook/atomic/atoms/Button/index'

export const SmallButton = (args : any) => <Button {...args} />

SmallButton.args = {
  children: 'Small Button',
  borderColor: '#a7f4ff',
  backgroundColor: '#a7f4ff',
  widthType: 'SMALL',
  heigthType: 'SMALL',
  shadowType: 'XLARGE',
  borderType: 'PILLSHAPE'
}

const Login = (): any => {
  return <SmallButton></SmallButton>
}
export default Login
