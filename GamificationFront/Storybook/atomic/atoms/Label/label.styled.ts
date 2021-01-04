import styled from "@emotion/styled";
import tw from "twin.macro";
import { generateShadowProps, generateBorderTypeProps, generateWidthTypeProps, generateHeightTypeProps ,generateTextAlignProps , generateFontWeightProps} from "../../../core/utils/twin.util";

export const CustomLabel = styled.a<{
    backgroundColor?: string;
    textAlign?:string;
    textColor?: string;
    fontWeight?:string;
    borderColor?: string;
    borderType?: string;
    shadowType?: string;
    widthType?: string;
    heigthType?: string;
    hasPadding?: boolean;
}>`
    display: block;
    color: ${(props : any) => props.textColor};
    background: ${(props : any) => props.backgroundColor};
    border-color: ${(props : any) => props.borderColor};
    ${(props : any) => props.hasPadding ? tw`py-3 px-3` : tw`p-0` };
    ${(props : any) => generateTextAlignProps(props.textAlign)}
    ${(props : any) => generateFontWeightProps(props.fontWeight)}
    ${(props : any) => generateShadowProps(props.shadowType)}
    ${(props : any) => generateBorderTypeProps(props.borderType)}
    ${(props : any) => generateWidthTypeProps(props.widthType)}
    ${(props : any) => generateHeightTypeProps(props.heigthType)}
`;