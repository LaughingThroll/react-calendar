export const isWeekend = (date: Date) => date.getDay() === 6 || date.getDay() === 0

export const getDayInBinaryString = (date: Date): string => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toLocaleString('en-US', { weekday: 'short' })
    .substring(-1, 2)
}

export const reverseDate = (
  dateInString: string,
  splitSeparator: string = '.',
  joinSeparator: string = '-'
): string => {
  return dateInString.split(splitSeparator).reverse().join(joinSeparator)
}

export const normalizeUTCDate = (dateInString: string): string => `${dateInString}T00:00:00`

export const getCountDays = (firstDate: string, secondDate: string): number => {
  const SECONDS_IN_DAY: number = 1000 * 60 * 60 * 24
  return Math.round((Date.parse(secondDate) - Date.parse(firstDate)) / SECONDS_IN_DAY)
}

const formatDateInKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]

export const getFutureDate = (day: number): string => {
  return formatDateInKebabCase(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day))
}
