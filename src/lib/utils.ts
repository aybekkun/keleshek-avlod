import { clsx, type ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY')
}

export const formatTime = (time: string) => {
  if (!time) return ''
  // If the input is only time (e.g., "13:00:00"), dayjs might not parse it correctly
  // depending on the browser. We can split it if it looks like HH:mm:ss.
  if (/^\d{2}:\d{2}(:\d{2})?$/.test(time)) {
    return time.slice(0, 5)
  }
  return dayjs(time).format('HH:mm')
}
