const findByID = <T extends { id: any }>(array: T[], value: any): T | undefined | never => {
  return array.find((el) => {
    if (!el.id) throw new Error('Its element is not contains propperty ID')
    return el.id === value
  })
}

export default findByID
