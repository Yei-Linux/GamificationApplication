import React, { useState } from 'react'
import { BarIcon, ToggleIconDiv, ToggleIconWrapper } from './styled'

export interface ToggleIconProps {
  onOpen: Function
}

const ToggleIcon = ({ onOpen }: ToggleIconProps) => {
  const [isToggle, setToggle] = useState(false)

  return (
    <ToggleIconWrapper
      onClick={() => {
        setToggle(!isToggle)
        onOpen(!isToggle)
      }}
    >
      <ToggleIconDiv isToggle={isToggle}>
        <BarIcon isToggle={isToggle} />
        <BarIcon isToggle={isToggle} />
        <BarIcon isToggle={isToggle} />
      </ToggleIconDiv>
    </ToggleIconWrapper>
  )
}

export default ToggleIcon
