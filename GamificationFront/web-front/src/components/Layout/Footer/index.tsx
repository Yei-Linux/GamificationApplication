import React from "react"

import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterSubtext,
} from "./footer.styled"

interface IFooterProps {
}

const Footer = ({}: IFooterProps) => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Handcrafted by © Thesis</FooterText>
        <FooterSubtext>Made with React</FooterSubtext>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer