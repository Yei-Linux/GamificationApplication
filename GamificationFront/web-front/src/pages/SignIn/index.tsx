import React from 'react';
import FormSignIn from "gamification-library/atomic/molecules/FormSmall"
import { useHistory } from 'react-router-dom';
import { axiosAuthMicroservice } from '../../config/axios';

const SignIn = () => {
  const history = useHistory();

  const handlerGetData = async (data): Promise<any> => {
    let response = await axiosAuthMicroservice.post('/users/sign-in', data);
    if(response.data) {
      localStorage.setItem("user_info",JSON.stringify(response.data));
    }
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
