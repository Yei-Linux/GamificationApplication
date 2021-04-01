import styled from "@emotion/styled";

export const TrafficLightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TrafficLightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Balls = styled.div<{ color: string, isBright: boolean }>`
    border-radius: 4em;
    color: ${props => props.color}
`

