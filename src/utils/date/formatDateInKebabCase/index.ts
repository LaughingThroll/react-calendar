const formatDateInKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]
export default formatDateInKebabCase
