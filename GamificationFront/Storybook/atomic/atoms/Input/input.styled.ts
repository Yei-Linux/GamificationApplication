import styled from "@emotion/styled";
import tw from "twin.macro";
import { EBorderType } from "../../../core/domain/enums";
import { generateShadowProps, generateBorderTypeProps, generateWidthTypeProps, generateHeightTypeProps } from "../../../core/utils/twin.util";

export const InputGroup = styled.div<{}>`
    display: block;
    position: relative;
    margin-bottom: 150px;

    &:disabled {
        cursor: not-allowed;
        background:$disabled;
        resize: none;
        color:#A7B6C2;
        border:solid 1px $disabled;
    }
`;

export const CustomInput = styled.input<{
    hasPadding?: boolean,
    borderType?: string;
    shadowType?: string;
    widthType?: string;
    heigthType?: string;
    borderColor?: string
}>`
    border-style: solid;
    outline: none;
    position: relative;
    &:focus {
        outline: none;
    }
    border-color: ${(props : any) => props.borderColor};
    ${(props : any) => props.hasPadding ? tw`py-2 px-2` : tw`p-0` };
    ${(props : any) => generateShadowProps(props.shadowType)}
    ${(props : any) => generateBorderTypeProps(props.borderType)}
    ${(props : any) => generateWidthTypeProps(props.widthType)}
    ${(props : any) => generateHeightTypeProps(props.heigthType)}
`;

export const CustomSelect = styled.select<{
    hasPadding?: boolean,
    borderType?: string;
    shadowType?: string;
    widthType?: string;
    heigthType?: string;
    borderColor?: string
}>`
    border-style: solid;
    outline: none;
    position: relative;
    &:focus {
        outline: none;
    }
    border-color: ${(props : any) => props.borderColor};
    ${(props : any) => props.hasPadding ? tw`py-2 px-2` : tw`p-0` };
    ${(props : any) => generateShadowProps(props.shadowType)}
    ${(props : any) => generateBorderTypeProps(props.borderType)}
    ${(props : any) => generateWidthTypeProps(props.widthType)}
    ${(props : any) => generateHeightTypeProps(props.heigthType)}
`;

export const CustomOption = tw.option`
    py-4
    px-4
    font-bold
`

export const InputIconContainer = styled.div<{}>`
  position: absolute;
  left: 8px;
  z-index: 10;
  background: transparent;
  height: 90%;
  display: flex;
  align-items: center;
`;