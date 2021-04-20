import styled from "@emotion/styled"
import tw from "twin.macro"
import { generateShadowProps, generateBorderTypeProps, generateWidthTypeProps, generateHeightTypeProps } from "../../../core/utils/twin.util"

export const CardContainer = styled.div<{
    backgroundColor?: string;
    borderType?: string;
    shadowType?: string;
    widthType?: string;
    heigthType?: string; }>`
  background-color: white;
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${(props : any) => props.backgroundColor};
  ${(props : any) => generateShadowProps(props.shadowType)};
  ${(props : any) => generateBorderTypeProps(props.borderType)};
  ${(props : any) => generateWidthTypeProps(props.widthType)};
  ${(props : any) => generateHeightTypeProps(props.heigthType)};
`

export const TitleContainer = tw.h4`
  text-xl
  text-center
  font-bold
  m-0
  p-4
`

export const SubtitleContainer = tw.p`
  text-center
  m-0
  p-2
`

export const OtherInfoContainer = tw.div`
  flex
  justify-center
  items-center
  p-6
`

export const ProcessInfoContainer = tw.div`
  flex
  justify-center
  items-center
`

export const TextProcess = tw.p`
  text-xl
  text-center
  font-semibold
  text-red-500
`

export const ActionsContainer = styled.div`
  padding: 0 padding-size 1.2rem;
  display: flex;
  flex-direction: column;
  order: 99;
`

export const InfoContainer = styled.div`
  padding: 0 0 1rem;
  display: flex;
`

export const IconCard = styled.div`
  width: 8rem;
  height: 8rem;
  margin: auto;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
  transform: translateY(-50%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    transform: translateY(-40%) scale(1.1);
  }
`

export const InfoButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #7510f7;
  font-weight: bold;
  width: 70%;
  max-width: 240px;
  border: 2px solid #7510f7;
  margin: 0px auto;
  padding: 1rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 1.5rem / 50%;
  transition: background-color 100ms ease-in-out,
  transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  text-align: center;
  &:hover {
    background-color: #7510f7;
    color: white;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    background-color: #7510f7;
    transform: scale(1);
    cursor: pointer;
  }
`

export const TextContainer = styled.div`
  padding: 10px;
`

export const ImageCoverContainer = styled.div<{}>`
    margin:0px;
    width: 100%;
    border-radius: 0;
    display: flex;
    justify-content: center;
`