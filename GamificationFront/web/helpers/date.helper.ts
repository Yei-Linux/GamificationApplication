import { dayModel, hourModel, minuteModel, secondModel } from '../constants'

const DateHelper = {
  isDateHigherCurrentDate: (date: string): boolean => {
    const localDate: any = new Date(date)
    const currentDate = new Date().getTime()
    const difference = currentDate - new Date(localDate).getTime()

    return difference < 0
  },
  getDifferenceBetweenDates: (date: string): number => {
    const dateProp = new Date(date).getTime()
    const now = new Date().getTime()

    return dateProp - now
  },
  getDateByDistanceNumber: (distance: number): any => {
    const day = Math.floor(distance / dayModel)
    const hour = Math.floor((distance % dayModel) / hourModel)
    const minute = Math.floor((distance % hourModel) / minuteModel)
    const second = Math.floor((distance % minuteModel) / secondModel)

    return { day, hour, minute, second }
  },
}

export default DateHelper
