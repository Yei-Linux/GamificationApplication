import Button from '../../Storybook/atomic/atoms/Button/index'

export const SmallButton = (args) => <Button {...args} />

SmallButton.args = {
  children: 'Small Button',
  borderColor: '#a7f4ff',
  backgroundColor: '#a7f4ff',
  widthType: 'SMALL',
  heigthType: 'SMALL',
  shadowType: 'XLARGE',
  borderType: 'PILLSHAPE'
}
//
const Login = (): JSX.Element => {
  return <SmallButton />
}
export default Login
