import React from 'react'

import { ContentContainer } from './maincontet.styled'

interface IContentProps {
  children: React.ReactNode
  isHeaderFixed?: boolean
}

const Content = ({ children, isHeaderFixed = true }: IContentProps) => {
  return <ContentContainer isHeaderFixed={isHeaderFixed}>{children}</ContentContainer>
}

export default Content
