import day from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

day.extend(relativeTime)

export const dayFormat = (date, format) => day.unix(date).format(format || 'MMM D, YYYY')
export const dayfromNow = (date) => day.unix(date).fromNow()
