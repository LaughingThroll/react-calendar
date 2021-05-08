const isEqualDate = (date: Date, dateArr: string[]): boolean => {
  const [year, month, day] = dateArr.map(Number)
  return date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year
}

export default isEqualDate
