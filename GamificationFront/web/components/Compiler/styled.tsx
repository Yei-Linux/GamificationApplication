import styled from '@emotion/styled'
import tw from 'twin.macro'

export const CompilerWrapper = styled.div`
  padding: 0px 1rem;
`

export const CompilerButtons = styled.div`
  ${tw`flex justify-center items-center w-full`};
  margin: 1rem 0px;

  div {
    margin: 5px;
  }
`

export const CompilerTitle = styled.div<{ isGoodAnswer: boolean }>`
  padding: 1rem;
  font-weight: bold;
  color: ${(props: any) => (props.isGoodAnswer ? 'rgb(40, 216, 101,1)' : 'rgb(255, 102, 134)')};
`

export const CompilerBody = styled.div`
  background: ${(props: any) => props.theme?.bg?.code};
  border-radius: 0.3em;
`

export const CompilerMessage = styled.code`
  background: ${(props: any) => props.theme?.bg?.code};
  color: ${(props: any) => props.theme?.color?.light};
  margin: auto;
  display: block;
  text-align: center;
  padding: 1rem;
`
