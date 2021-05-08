import React, { useReducer } from "react";
import context from "./context";
import reducer from "./reducer";
import { SET_FORM_VALUES, SET_ONCLICK_SUBMIT } from "./types";

interface ISetFormSelected {
  name: string;
  value: string;
}

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    formValue: null,
    clickSubmit: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setFormValues = (data: ISetFormSelected) => {
    dispatch({
      type: SET_FORM_VALUES,
      payload: data,
    });
  };

  const setOnClickSubmit = (data: ISetFormSelected) => {
    dispatch({
      type: SET_ONCLICK_SUBMIT,
      payload: data,
    });
  };

  return (
    <context.Provider
      value={{
        formValue: state.formValue,
        clickSubmit: state.clickSubmit,
        setFormValues,
        setOnClickSubmit,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default FormProvider;
