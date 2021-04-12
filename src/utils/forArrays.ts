export const createArrayFromNumber = (count: number): number[] => {
  return [...Array.from<number>({ length: count }).keys()].map((num) => num + 1)
}

export const findByID = <T extends { [key: string]: any }>(array: T[], value: any): T | undefined | never => {
  return array.find((el) => {
    if (!el.id) throw new Error('Its element is not contains propperty ID')
    return el.id === value
  })
}
