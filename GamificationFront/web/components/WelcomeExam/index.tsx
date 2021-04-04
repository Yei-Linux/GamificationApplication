import React, { useState } from 'react'
import Modal from 'gamification-library/atomic/molecules/Modal'
import TrafficLight from 'gamification-library/atomic/molecules/TrafficLight'
import GuideMessage from 'gamification-library/atomic/molecules/GuideMessage'
import { WelcomeExamWrapper } from './styled'

export interface WelcomeExamProps {}

const WelcomeExam = ({}: WelcomeExamProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleToggle = (): any => {
    setIsVisible(!isVisible)
  }

  return (
    <Modal
      title="Preparado para tu primer examen 🤭"
      animationType="top"
      isVisible={isVisible}
      onClose={handleToggle}
    >
      <WelcomeExamWrapper>
        <TrafficLight />
        <GuideMessage
          guideType="box"
          message="Este examen medira tu nivel actual, vamos!"
          direction="right"
          background="#ffab73"
        />
      </WelcomeExamWrapper>
    </Modal>
  )
}

export default WelcomeExam
