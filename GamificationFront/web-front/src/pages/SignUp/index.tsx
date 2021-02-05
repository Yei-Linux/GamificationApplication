import React from 'react';
import { useHistory } from 'react-router-dom';
import FormSignUp from "gamification-library/atomic/molecules/FormMedium"
import { axiosAuthMicroservice } from '../../config/axios';

const SignUp = () => {
  const history = useHistory();

  const handlerGetData = async (data): Promise<void> => {
    await axiosAuthMicroservice.post('/users/sign-up', data);
    handlerBack();
  };

  const handlerBack = (): void => {
    history.push('/signin');
  };

  return (
    <FormSignUp handlerGetData={handlerGetData} handlerBack={handlerBack} />
  );
};
export default SignUp;
