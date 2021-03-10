export const createArrayFromNumber = (number: number): number[] => new Array(number).fill(0).map((_, ind) => ++ind)
