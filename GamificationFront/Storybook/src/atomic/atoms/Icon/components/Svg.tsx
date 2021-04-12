import React, { ReactNode } from "react";

interface Props {
  readonly fill?: string;
  readonly width?: string;
  readonly height?: string;
  readonly viewBox?: string;
  readonly className?: string;
  readonly xmlns?: string;
  readonly xmlnsXlink?: string;
  readonly children?: ReactNode;
}

const Svg = ({ children, ...props }: Props) => (
  <svg
    style={{
      width: `${props.width} !important`,
      height: `${props.height} !important`,
    }}
    {...props}
  >
    {children}
  </svg>
);

Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
};

export default Svg;
