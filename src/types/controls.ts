export interface ControlForInput {
  value: string
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ControlForSelect {
  value: string
  changeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
