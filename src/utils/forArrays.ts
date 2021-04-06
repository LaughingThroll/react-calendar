export const createArrayFromNumber = (count: number): number[] =>
  [...Array.from<number>({ length: count }).keys()].map((num) => num + 1)
