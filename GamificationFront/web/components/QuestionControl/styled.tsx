import styled from '@emotion/styled'

export const ToggleIconBox = styled.div<{ right: string }>`
  position: absolute;
  right: ${props => props.right};
  top: 20%;
  height: 67px;
  background: ${(props: any) => props.theme?.bg?.code};
`

export const QuestionControlWrapper = styled.div<{ right: string }>`
  position: absolute;
  right: ${props => props.right};
  top: 20%;
  width: 150px;
  min-height: 150px;
  background: ${(props: any) => props.theme?.bg?.code};
  display: flex;
  flex-direction: column;
`

export const QuestionControlContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
`

export const QuestionControlTitle = styled.p`
  background: ${(props: any) => props.theme?.bg?.code};
  width: 100%;
  padding: 15px;
  color: white;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 10px;
  text-align: center;
`

export const QuestionControlButton = styled.a`
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  background: cornflowerblue;
  margin: 5px;
  font-weight: bold;
  color: white;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 30%), inset 0 0 0 0 #fff,
    inset 0 0 1px 1px rgb(204 198 197 / 50%);

  &:hover {
    cursor: pointer;
  }
`
