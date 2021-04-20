const reverseDate = (dateInString: string, splitSeparator: string = '.', joinSeparator: string = '-'): string => {
  return dateInString.split(splitSeparator).reverse().join(joinSeparator)
}

export default reverseDate
