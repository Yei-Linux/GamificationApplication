import styled from "@emotion/styled";

export const AnimatorGuideImg = styled.div<{
  imageProps: any;
}>`
  width: ${(props) => props.imageProps.dimensions.width};
  height: ${(props) => props.imageProps.dimensions.height};
  background: ${(props) =>
    `url(${props.imageProps.source}) ${props.imageProps.position.x} ${props.imageProps.position.y}`};
`;
