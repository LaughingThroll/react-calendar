export const getPercentageOfAbsentCount = (percentageOfAbsent: number[], date: Date): number => {
  return date.getFullYear() === new Date().getFullYear() ? percentageOfAbsent[date.getMonth()] : 0
}
