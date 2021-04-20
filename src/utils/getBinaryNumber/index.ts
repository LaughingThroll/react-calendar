export const getBinaryNumber = (number: number): string =>
  number > 0 && number < 10 ? `0${number}` : number.toString()
