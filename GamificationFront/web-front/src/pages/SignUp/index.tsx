import React from 'react';
import { useHistory } from 'react-router-dom';
import FormSignUp from 'storybook-gamification2/molecules/FormMedium';
import { axiosAuthMicroservice } from '../../config/axios';

// import { axiosSignUpMicroservice } from '../../config/axios';

const SignIn = () => {
  const history = useHistory();

  const handlerGetData = async (data): Promise<void> => {
    console.log(data);
    // await axiosSignUpMicroservice.post(data);
    await axiosAuthMicroservice.post('/sign-up', data);
  };
  const handlerBack = (): void => {
    history.push('/signin');
  };
  return (
    <FormSignUp handlerGetData={handlerGetData} handlerBack={handlerBack} />
  );
};
export default SignIn;
