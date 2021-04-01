import styled from "@emotion/styled";

export const GuideMessageWrapper = styled.div<{ direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.direction == "left" ? "row" : "row-reverse"};
`;
