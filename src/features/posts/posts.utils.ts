import { format } from 'date-fns'

export function parsePostDate(date: string) {
  return format(new Date(date), 'MMM dd, yyyy')
}
