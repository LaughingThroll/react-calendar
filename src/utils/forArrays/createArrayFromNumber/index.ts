const createArrayFromNumber = (count: number): number[] => {
  return [...Array.from<number>({ length: count }).keys()].map((num) => num + 1)
}

export default createArrayFromNumber
