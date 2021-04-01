import styled from '@emotion/styled'
import * as React from 'react'
import Question from '../components/Question'
import WithWrapper from '../hocs/WithWrapper'
import tw from 'twin.macro'
import { Questions } from '../mocks/exam'
import QuestionControl from '../components/QuestionControl'
import Countdown from '../components/Countdown'
import EditorLayout from '../components/EditorLayout'

export interface ExamProps {}

const ExamWrapper = styled.div`
  ${tw`w-full flex`}
  overflow: hidden;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`

const QuestionWrapper = styled.div`
  ${tw`flex`}

  scroll-snap-align: start;
  flex-shrink: 0;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  width: 100%;
`

const ControlButtons = styled.div`
  ${tw`flex items-center`}
`

const WelcomeExamImage = styled.img`
  margin-left: 20px;
  height: 100px;
`

const Exam = () => {
  return (
    <ExamWrapper>
      {Questions.map((item: any, index: number) => (
        <QuestionWrapper id={`question-${index}`} key={`question-${index}`}>
          <Question question={item.question} numberQuestion={index + 1} />
          <EditorLayout />
        </QuestionWrapper>
      ))}

      <QuestionControl questions={Questions} />
    </ExamWrapper>
  )
}

export default WithWrapper({
  isHeader: true,
  isFooter: false,
  isHeaderCustom: true,
  isHeaderFixed: false,
  headerChildren: [
    <ControlButtons key="control-buttons">
      <Countdown isVisible dateEndCountdown="2021-05-06 19:09:30" />
      <WelcomeExamImage src="https://giphy.com/static/img/zoomies-small.gif" alt="" />
    </ControlButtons>
  ]
})(Exam)
