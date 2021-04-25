import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { TextAreaWrapper } from "./TextArea.styles";

interface AutoSize {
  minRows: number;
  maxRows: number;
}

export interface ITextArea extends IGeneralProps {
  /**
   * Placeholder TextArea to show
   */
  placeholder?: string;
  /**
   * Identifier TextArea
   */
  name: string;
  /**
   * Value TextArea
   */
  value: any;
  /**
   * Cols TextArea
   */
  cols: number;
  /**
   * Rows TextArea
   */
  rows: number;
  /**
   * Autosize TextArea
   */
  autoSize?: AutoSize;
}

const TextArea = ({ autoSize, ...args }: ITextArea) => {
  return <TextAreaWrapper {...args} />;
};

TextArea.defaultProps = {
  name: "gamification",
  placeholder: "",
  cols: 5,
  rows: 5,
};

export default TextArea;
