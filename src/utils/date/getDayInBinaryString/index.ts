const getDayInBinaryString = (date: Date): string => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toLocaleString('en-US', { weekday: 'short' })
    .substring(-1, 2)
}

export default getDayInBinaryString
