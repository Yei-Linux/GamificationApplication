import React, { JSXElementConstructor, ReactElement } from "react";

export interface IUseCloneElement {
  /**
   * Childrens to validate and clone
   */
  children: React.ReactNode;
  /**
   * Childrens's props to add on CloneElement
   */
  propsElement: any;
  /**
   * Max number childrens to validate
   */
  maxChildrenNumber: Number;
  /**
   * Childrens's types to validate
   */
  childrenTypes: any[];
}

type childrenWithPropType =
  | ReactElement<any, string | JSXElementConstructor<any>>[]
  | null
  | undefined;

const useCloneElement = ({
  children,
  propsElement,
  maxChildrenNumber,
  childrenTypes,
}: IUseCloneElement) => {
  const validatorChildrenTypes = (child: any): boolean =>
    childrenTypes.includes(child.type);

  const validatorChildrenLength = () =>
    childrenWithProps!?.length > maxChildrenNumber;

  const validatorChildren = (child: any) => {
    if (React.isValidElement(child) && validatorChildrenTypes(child))
      return React.cloneElement(child, propsElement);
  };

  const childrenWithProps: childrenWithPropType = React.Children.map(
    children,
    validatorChildren
  );

  return {
    validatorChildrenLength,
    childrenWithProps,
  };
};

export default useCloneElement;
