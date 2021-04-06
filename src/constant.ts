import { TTheme } from './types/theme'

export const MAIN_URL: string = 'https://calendar-25b31-default-rtdb.firebaseio.com'

export const THEMES: TTheme[] = [
  ['melrose-theme', 'melrose-theme--background'],
  ['malibu-theme', 'malibu-theme--background'],
  ['mona-lisa-theme', 'mona-lisa-theme--background'],
  ['atomic-tangerine-theme', 'atomic-tangerine-theme--background'],
]

export const OPTIONS_FOR_GET_REQUEST = {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
