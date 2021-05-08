const getCountDays = (firstDate: string, secondDate: string): number => {
  const SECONDS_IN_DAY: number = 1000 * 60 * 60 * 24
  return Math.floor((Date.parse(secondDate) - Date.parse(firstDate)) / SECONDS_IN_DAY)
}

export default getCountDays
