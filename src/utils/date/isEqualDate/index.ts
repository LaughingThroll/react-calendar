const isEqualDate = (date: Date, dateArr: string[]): boolean => {
  const [day, month, year] = dateArr.map(Number)
  return date.getDate() === day && date.getMonth() + 1 === month && date.getFullYear() === year
}

export default isEqualDate
