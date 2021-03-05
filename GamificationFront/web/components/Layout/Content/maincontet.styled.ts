import { css } from '@emotion/react'
import styled from '@emotion/styled'
import tw from 'twin.macro'

export const ContentContainer = styled.div<{ isHeaderFixed: boolean }>`
  ${(props: any) =>
    props.isHeaderFixed &&
    css`
      padding-top: 120px;
    `}
  min-height: 100%;
  ${tw`w-full`}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
