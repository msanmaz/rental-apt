import config from 'lib/config'
import { isSameDay } from 'date-fns'


export const isBlocked = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  if (config.blocked[year]) {
    if (config.blocked[year][month]) {
      if (config.blocked[year][month].findIndex((el) => el === day) !== -1) {
        return true
      }
    }
  }

  return false
}

export const getDatesBetweenDates = (startDate, endDate) => {
  let dates = []
  //to avoid modifying the original date we clone it
  const theDate = new Date(startDate)
  theDate.setDate(theDate.getDate() + 1) //we exclude the first date
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
  }
  return dates
}


export const isBooked = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  if (config.booked[year]) {
    if (config.booked[year][month]) {
      if (config.booked[year][month].findIndex((el) => el === day) !== -1) {
        return true
      }
    }
  }

  return false
}

export const isPast = (date) => {
  const now = new Date()
  if (date.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0) >= 0) {
    return false
  }

  return true
}


export const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate) //clone
  const end = new Date(endDate) //clone
  let dayCount = 0

  while (end > start) {
    dayCount++
    start.setDate(start.getDate() + 1)
  }

  return dayCount
}


const isDayBefore = (d1, d2) => {
  const day1 = new Date(d1).setHours(0, 0, 0, 0)
  const day2 = new Date(d2).setHours(0, 0, 0, 0)
  return day1 < day2
}

export const addDayToRange = (day, range = { from: null, to: null }) => {
  let { from, to } = range
  if (!from) {
    from = day
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null
    to = null
  } else if (to && isDayBefore(day, from)) {
    from = day
  } else if (to && isSameDay(day, to)) {
    from = day
    to = day
  } else {
    to = day
    if (isDayBefore(to, from)) {
      to = from
      from = day
    }
  }

  return { from, to }
}

export const getBlockedDates = () => {
  const blocked = []

  if (config.blocked) {
    for (const [year_key, year_value] of Object.entries(config.blocked)) {
      for (const [month_key, month_value] of Object.entries(year_value)) {
        for (const day of month_value) {
          blocked.push(new Date(year_key, month_key - 1, day))
        }
      }
    }
  }

  return blocked
}

export const isDaySelectable = (day) => {
  if (!day) return true //this means we're unselecting a day, return true to allow

  return !isPast(day) && !isBlocked(day) && !isBooked(day) && calcNumberOfNightsBetweenDates(new Date(), day) <= 30 * 6
}


