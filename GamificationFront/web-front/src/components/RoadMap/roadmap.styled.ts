import styled from "@emotion/styled";

export const RoadMapContainer = styled.div<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ImageBackground = styled.div<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("https://i.redd.it/ufxpjuc55xv01.png");
    width: 100%;
    height: 100%;
`;

export const ParagraphFirst = styled.p<{}>`
    margin: 0px;
`

export const ParagraphSecond = styled.p<{
    color: string
}>`
    margin: 0px;
    word-break: break-all;
    width: 80%;
    text-align: center;
    font-weight: bold;
    color: ${(props : any) => props.color};
    font-family: '-webkit-pictograph';
`

export const ItemContainer = styled.div<{isLeft: any}>`
    margin: 20px 10px;
    margin-left: ${(props) => props.isLeft ? `-200px` : `200px`};
`