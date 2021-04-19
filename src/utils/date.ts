export const getCountDays = (firstDate: string, secondDate: string): number => {
  const SECONDS_IN_DAY: number = 1000 * 60 * 60 * 24
  return Math.round((Date.parse(secondDate) - Date.parse(firstDate)) / SECONDS_IN_DAY)
}

export const formatDateInKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]

export const getFutureDate = (day: number): string => {
  return formatDateInKebabCase(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day))
}
