import React from 'react'
import { QuestionDescription, QuestionParagraph, QuestionTitle, QuestionWrapper } from './styled'

export interface QuestionProps {
  question: string
  numberQuestion: number
}

const Question = ({ question, numberQuestion }: QuestionProps) => {
  return (
    <QuestionWrapper>
      <QuestionTitle>{`Question ${numberQuestion}`}</QuestionTitle>
      <QuestionDescription>
        <QuestionParagraph
          dangerouslySetInnerHTML={{
            __html: question
          }}
        ></QuestionParagraph>
      </QuestionDescription>
    </QuestionWrapper>
  )
}

export default Question
