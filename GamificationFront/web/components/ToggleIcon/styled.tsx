import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ToggleIconWrapper = styled.div``

export const ToggleIconDiv = styled.div<{ isToggle: boolean }>`
  display: block;
  width: 100%;
  -webkit-transition: margin 600ms;
  -moz-transition: margin 600ms;
  transition: margin 600ms;
  cursor: pointer;
`

export const BarIcon = styled.span<{ isToggle: boolean }>`
  display: block;
  width: 3.8em;
  height: 0.2em;
  margin: 0.9em;
  border-right: 2.8em solid #fff;
  border-left: 0.6em solid #d6d6d6;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition-property: -webkit-transform, margin, border-right-color, box-shadow;
  -moz-transition-property: -moz-transform, margin, border-right-color, box-shadow;
  transition-property: transform, margin, border-right-color, box-shadow;
  -webkit-transition-duration: 600ms;
  -moz-transition-duration: 600ms;
  transition-duration: 600ms;

  &:nth-of-type(1) {
    -webkit-transition: opacity 300ms;
    -moz-transition: opacity 300ms;
    transition: opacity 300ms;

    ${(props) =>
      props.isToggle &&
      css`
        display: none;
      `}
  }

  &:nth-of-type(2) {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);

    ${(props) =>
      props.isToggle &&
      css`
        margin-left: 1.4em;
        -webkit-transform: rotate(-137deg) translateY(-1.5em);
        -moz-transform: rotate(-137deg) translateY(-1.5em);
        -ms-transform: rotate(-137deg) translateY(-1.5em);
        -o-transform: rotate(-137deg) translateY(-1.5em);
        transform: rotate(-137deg) translateY(-1.5em);
      `}
  }

  ${(props) =>
    props.isToggle &&
    css`
      &:nth-of-type(3) {
        margin-left: 0.5em;
        -webkit-transform: rotate(-42deg);
        -moz-transform: rotate(-42deg);
        -ms-transform: rotate(-42deg);
        -o-transform: rotate(-42deg);
        transform: rotate(-42deg);
      }
    `}
`
