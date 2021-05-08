import formatDateInKebabCase from '../formatDateInKebabCase'

const getFutureOrPastDate = (day: number): string => {
  return formatDateInKebabCase(
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day + 1)
  )
}

export default getFutureOrPastDate
