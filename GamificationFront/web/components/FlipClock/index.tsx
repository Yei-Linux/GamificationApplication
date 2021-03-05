import styled from '@emotion/styled'
import React, { Fragment, useEffect, useState } from 'react'
import DateHelper from '../../helpers/date.helper'
import FlipUnit from '../FlipUnit'

const { getDifferenceBetweenDates, getDateByDistanceNumber } = DateHelper

interface FlipClockProps {
  date: string
  handleFinishClock: any
}

const FlipClockWrapper = styled.div`
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
`

const FlipClockBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`

const FlipItem = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlipItemText = styled.p`
  color: ${(props: any) => props.theme?.bg?.code};
  margin: 0px;
  font-weight: bold;
`

const FlipClock = ({ date, handleFinishClock }: FlipClockProps): JSX.Element => {
  let interval: any

  const [isClock, setClock] = useState(true)

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const [daysShuffle, setDaysShuffles] = useState(true)
  const [hoursShuffle, setHoursShuffles] = useState(true)
  const [minutesShuffle, setMinutesShuffles] = useState(true)
  const [secondsShuffle, setSecondsShuffles] = useState(true)

  useEffect(() => {
    handleCreateInterval()
  }, [])

  useEffect(() => {
    setSecondsShuffles(!secondsShuffle)
  }, [seconds])

  useEffect(() => {
    setMinutesShuffles(!minutesShuffle)
  }, [minutes])

  useEffect(() => {
    setHoursShuffles(!hoursShuffle)
  }, [hours])

  useEffect(() => {
    setDaysShuffles(!daysShuffle)
  }, [days])

  const handleCreateInterval = (): void => {
    interval = setInterval(() => handleGetDifferenceDates(), 1000)
  }

  const isDistanceLess = (distance: number) => {
    if (distance >= 0) return
    clearInterval(interval)
    setClock(false)
    handleFinishClock()
  }

  const handleGetDifferenceDates = (): void => {
    const distance = getDifferenceBetweenDates(date)
    const { second, minute, hour, day } = getDateByDistanceNumber(distance)

    setDays(day)
    setHours(hour)
    setMinutes(minute)
    setSeconds(second)

    isDistanceLess(distance)
  }

  return (
    <Fragment>
      {isClock && (
        <FlipClockWrapper>
          <FlipClockBox>
            <FlipItem>
              <FlipUnit
                unit="days"
                currentDigit={days}
                previousDigit={days + 1}
                shuffle={daysShuffle}
              />
              <FlipItemText>Dia(s)</FlipItemText>
            </FlipItem>
            <FlipItem>
              <FlipUnit
                unit="hours"
                currentDigit={hours}
                previousDigit={hours + 1}
                shuffle={hoursShuffle}
              />
              <FlipItemText>Hrs</FlipItemText>
            </FlipItem>

            <FlipItemText>:</FlipItemText>

            <FlipItem>
              <FlipUnit
                unit="minutes"
                currentDigit={minutes}
                previousDigit={minutes + 1}
                shuffle={minutesShuffle}
              />
              <FlipItemText>Min</FlipItemText>
            </FlipItem>

            <FlipItemText>:</FlipItemText>

            <FlipItem>
              <FlipUnit
                unit="seconds"
                currentDigit={seconds}
                previousDigit={seconds + 1}
                shuffle={secondsShuffle}
              />
              <FlipItemText>Seg</FlipItemText>
            </FlipItem>
          </FlipClockBox>
        </FlipClockWrapper>
      )}
    </Fragment>
  )
}

export default FlipClock
