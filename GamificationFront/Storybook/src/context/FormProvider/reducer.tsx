import { SET_FORM_VALUES, SET_ONCLICK_SUBMIT } from "./types";

interface IAction {
  type: string;
  payload: any;
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_ONCLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: null,
      };
    default:
      return state;
  }
};
