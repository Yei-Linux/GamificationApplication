import React, { Fragment, useState } from 'react'

import DateHelper from '../../helpers/date.helper'
import FlipClock from '../FlipClock'

export interface CountDownProps {
  /**
   * Date end of countdown
   */
  dateEndCountdown: string
  /**
   * Countdown Visible flag
   */
  isVisible?: boolean
}

const Countdown = ({ dateEndCountdown, isVisible = false }: CountDownProps): JSX.Element => {
  const { isDateHigherCurrentDate } = DateHelper
  const [visibleCountdown, setVisibleCountdown] = useState(isVisible)

  return (
    <Fragment>
      {visibleCountdown && isDateHigherCurrentDate(dateEndCountdown) && dateEndCountdown !== '' && (
        <FlipClock date={dateEndCountdown} handleFinishClock={() => setVisibleCountdown(false)} />
      )}
    </Fragment>
  )
}

export default Countdown
