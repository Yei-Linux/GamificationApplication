import React, { useState } from 'react'
import Compiler from '../Compiler'
import Editor from '../Editor/Editor'
import { EditorLayoutWrapper } from './styled'

export interface EditorLayoutProps {}

const EditorLayout = () => {
  const [isGoodAnswer] = useState(false)
  return (
    <EditorLayoutWrapper>
      <Editor
        language="javascript"
        displayName="JS"
        value={''}
        onChange={(value: any) => {
          console.log(value)
        }}
      />
      <Compiler isGoodAnswer={isGoodAnswer} messageCompiled="Answer compiled successfull" />
    </EditorLayoutWrapper>
  )
}

export default EditorLayout
