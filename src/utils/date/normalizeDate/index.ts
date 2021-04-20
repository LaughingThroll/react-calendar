const normalizeDate = (dateInString: string): string => {
  const timeRegExp = /T.*/g
  const NORMALIZE_TIME = 'T00:00:00'

  return timeRegExp.test(dateInString)
    ? dateInString.replace(timeRegExp, NORMALIZE_TIME)
    : `${dateInString}${NORMALIZE_TIME}`
}

export default normalizeDate
