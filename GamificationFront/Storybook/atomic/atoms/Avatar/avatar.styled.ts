import styled from "@emotion/styled";
import {
  generateBorderTypeProps,
  generateHeightTypeProps,
  generateShadowProps,
  generateWidthTypeProps,
} from "../../../core/utils/twin.util";

export const AvatarContainer = styled.div<{}>`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props: any) => generateShadowProps(props.shadowType)}
    ${(props: any) => generateBorderTypeProps(props.borderType)}
    ${(props: any) => generateWidthTypeProps(props.widthType)}
    ${(props: any) => generateHeightTypeProps(props.heigthType)}
`;
