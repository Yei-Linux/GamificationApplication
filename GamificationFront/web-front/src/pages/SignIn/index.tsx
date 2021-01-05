import React from 'react';
import FormSignIn from 'storybook-gamification8/molecules/FormSmall';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();

  const handlerGetData = (data): void => {
    console.log(data);
    history.push('/exercise');
  };

  const handlerBack = (): void => {
    history.push('/signup');
  };

  return (
    <FormSignIn handlerGetData={handlerGetData} handlerBack={handlerBack} />
  );
};
export default SignIn;
