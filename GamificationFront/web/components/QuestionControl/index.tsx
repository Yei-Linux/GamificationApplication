import React, { Fragment, useState } from 'react'
import ToggleIcon from '../ToggleIcon'
import {
  QuestionControlButton,
  QuestionControlContainer,
  QuestionControlTitle,
  QuestionControlWrapper,
  ToggleIconBox
} from './styled'

export interface QuestionControlProps {
  questions?: any[]
}

const QuestionControl = ({ questions }: QuestionControlProps) => {
  const [isOpen,setOpen] = useState(false);

  return (
    <Fragment>
      <ToggleIconBox right={isOpen? '130px' : '0px' }>
        <ToggleIcon onOpen={setOpen}/>
      </ToggleIconBox>
      <QuestionControlWrapper right={isOpen? '0px' : '-150px' }>
        <QuestionControlTitle>Preguntas</QuestionControlTitle>
        <QuestionControlContainer>
          {questions?.map((_question: any, index: number) => (
            <QuestionControlButton href={`#question-${index}`}>{index + 1}</QuestionControlButton>
          ))}
        </QuestionControlContainer>
      </QuestionControlWrapper>
    </Fragment>
  )
}

export default QuestionControl
