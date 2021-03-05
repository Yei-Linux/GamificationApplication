import styled from '@emotion/styled'

export const QuestionWrapper = styled.div`
  width: ${(props: any) => props.theme?.width?.medium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QuestionTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: cornflowerblue;
  color: ${(props: any) => props.theme?.color?.light};
  font-weight: bold;
  width: 100%;
`

export const QuestionDescription = styled.div`
  padding: 10px;
  background-color: ${(props: any) => props.theme?.bg?.light};
  height: 100%;
`

export const QuestionParagraph = styled.div`
  overflow: auto;
  height: 80%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props: any) => props.theme?.bg?.ocean};
    border-radius: 20px;
  }
`
