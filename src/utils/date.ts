export const daysInMonth = (date: Date): number => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

export const formatDayInBinaryString = (date: Date, day: number): string => {
  return new Date(date.getFullYear(), date.getMonth(), day)
    .toLocaleString("en-US", { weekday: "short" })
    .substring(-1, 2)
}
