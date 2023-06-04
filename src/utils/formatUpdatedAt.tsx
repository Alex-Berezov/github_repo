import { formatDistanceToNow, format } from 'date-fns'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export const formatUpdatedAt = (updatedAt: string): string => {
  const date = new Date(updatedAt)
  const now = new Date()

  if (isSameDay(date, now)) {
    return `Updated ${formatDistanceToNow(date)} ago`
  } else if (isYesterday(date, now)) {
    return 'yesterday'
  } else if (isWithin7Days(date, now)) {
    const daysAgo = differenceInCalendarDays(now, date)
    return `Updated ${daysAgo} days ago`
  } else {
    return `Updated on ${format(date, 'MMM dd, yyyy')}`
  }
}

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

const isYesterday = (date1: Date, date2: Date): boolean => {
  const yesterday = new Date(date2)
  yesterday.setDate(date2.getDate() - 1)
  return isSameDay(date1, yesterday)
}

const isWithin7Days = (date1: Date, date2: Date): boolean => {
  const sevenDaysAgo = new Date(date2)
  sevenDaysAgo.setDate(date2.getDate() - 7)
  return date1 >= sevenDaysAgo && date1 < date2
}
