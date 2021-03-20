import React from 'react'
import {
  CompilerBody,
  CompilerButtons,
  CompilerMessage,
  CompilerTitle,
  CompilerWrapper
} from './styled'

import Label from 'gamification-library/atomic/atoms/Label'
import {
  EBorderType,
  EHeightType,
  EShadowType,
  EWithType
} from 'gamification-library/core/domain/enums'
import Button from 'gamification-library/atomic/atoms/Button'
import { theme } from '../../styles/theme'

export interface CompilerProps {
  isGoodAnswer: boolean
  messageCompiled: string
}

const Compiler = ({ isGoodAnswer, messageCompiled }: CompilerProps) => {
  return (
    <CompilerWrapper>
      <CompilerButtons>
        <Button
          onClick={() => {}}
          children={'Run code ⚡'}
          textColor={'white'}
          borderColor={'#7f9cf5'}
          backgroundColor={'#7f9cf5'}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
        <Button
          onClick={() => {}}
          children={'Submit 🔥'}
          textColor={'white'}
          borderColor={theme.LIGHT.bg.submit}
          backgroundColor={theme.LIGHT.bg.submit}
          widthType={EWithType.SMALL}
          heigthType={EHeightType.SMALL}
          shadowType={EShadowType.XLARGE}
          borderType={EBorderType.PILLSHAPE}
        />
      </CompilerButtons>

      <CompilerTitle isGoodAnswer={isGoodAnswer}>
        {isGoodAnswer ? 'Answer without errors 😄' : 'Answer with errors 😓'}
      </CompilerTitle>
      <CompilerBody>
        <Label
          textColor="#d4d1d1"
          isLink={false}
          hasPadding
          borderColor="transparent"
          backgroundColor="transparent"
        >
          Compiler Message
        </Label>
        <CompilerMessage>{messageCompiled}</CompilerMessage>
      </CompilerBody>
    </CompilerWrapper>
  )
}

export default Compiler
