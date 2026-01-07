import { clsx, type ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY')
}

export const formatTime = (date: string) => {
  return dayjs(date).format('HH:mm')
}
