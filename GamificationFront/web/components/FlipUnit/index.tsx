import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

interface FlipUnitProps {
  currentDigit: any
  previousDigit: any
  unit: string
  shuffle: boolean
}

const FoldAnimation = keyframes`
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(-180deg);
    }
`

const UnfoldAnimation = keyframes`
    0% {
        transform: rotateX(180deg);
    }
    100% {
        transform: rotateX(0deg);
    }
`

const FlipUnitWrapper = styled.div`
  display: block;
  position: relative;
  width: 40px;
  background: #7a8cf0;
  color: white;
  height: 40px;
  perspective-origin: 50% 50%;
  perspective: 300px;
  border-radius: 3px;
  box-shadow: 0px 10px 10px -10px grey;
`

const StaticCard = styled.div<{ position: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 50%;
  overflow: hidden;

  ${(props: any) =>
    props.position == `upperCard` &&
    css`
      align-items: flex-end;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.32);
      span {
        transform: translateY(50%);
      }
    `};
  ${(props: any) =>
    props.position == `lowerCard` &&
    css`
      align-items: flex-start;
      border-top: 0.5px solid #ffffff52;
      span {
        transform: translateY(-50%);
      }
    `}
`

const AnimatedCard = styled.div<{ animationType: string }>`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  ${(props: any) =>
    props.animationType == `fold` &&
    css`
      top: 0%;
      align-items: flex-end;
      transform-origin: 50% 100%;
      transform: rotateX(0deg);
      background: #7a8cf0;
      animation: ${FoldAnimation} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
    `};
  ${(props: any) =>
    props.animationType == `unfold` &&
    css`
      top: 50%;
      align-items: flex-start;
      transform-origin: 50% 0%;
      transform: rotateX(180deg);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      background: #7a8cf0;
      animation: ${UnfoldAnimation} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal
        forwards;
      span {
        transform: translateY(-50%);
      }
    `}
`

const FlipText = styled.span`
  font-size: 1.6em;
  font-weight: 500;
  color: lighten(black, 20%);
`

const FlipUnit = ({ currentDigit, previousDigit, unit, shuffle }: FlipUnitProps) => {
  const handleAddZero = (digit: number) => {
    return digit < 10 ? `0${digit}` : digit
  }

  const handleChangeDigit = (previous: number) => {
    switch (unit) {
      case 'seconds':
        return previous == 60 ? handleAddZero(0) : handleAddZero(previous)

      case 'minutes':
        return previous == 60 ? handleAddZero(0) : handleAddZero(previous)

      case 'hours':
        return previous == 25 ? handleAddZero(23) : handleAddZero(previous)

      default:
        return 0
    }
  }

  return (
    <FlipUnitWrapper>
      <StaticCard position="upperCard">
        <FlipText>{handleAddZero(currentDigit)}</FlipText>
      </StaticCard>
      <StaticCard position="lowerCard">
        <FlipText>{handleChangeDigit(previousDigit)}</FlipText>
      </StaticCard>

      <AnimatedCard animationType={shuffle ? 'fold' : 'unfold'}>
        <FlipText>
          {shuffle ? handleChangeDigit(previousDigit) : handleAddZero(currentDigit)}
        </FlipText>
      </AnimatedCard>
      <AnimatedCard animationType={!shuffle ? 'fold' : 'unfold'}>
        <FlipText>
          {!shuffle ? handleChangeDigit(previousDigit) : handleAddZero(currentDigit)}
        </FlipText>
      </AnimatedCard>
    </FlipUnitWrapper>
  )
}

export default FlipUnit
