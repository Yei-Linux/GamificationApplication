import React from 'react';
import { useHistory } from 'react-router-dom';
import FormSignUp from 'storybook-gamification11/molecules/FormMedium';
import { axiosAuthMicroservice } from '../../config/axios';

const SignIn = () => {
  const history = useHistory();

  const handlerGetData = async (data): Promise<void> => {
    /*let response = await axiosAuthMicroservice.post('/users/sign-up', data);
    if(response.data && response.data.data) {
      localStorage.setItem("email",response.data.data.email);
    }*/
    history.push('/exercise');
  };

  const handlerBack = (): void => {
    history.push('/signin');
  };

  return (
    <FormSignUp handlerGetData={handlerGetData} handlerBack={handlerBack} />
  );
};
export default SignIn;
