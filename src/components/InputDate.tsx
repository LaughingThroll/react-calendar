import React from "react"
interface IInputDate {
  title?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputDate = ({ title, value, onChange }: IInputDate) => {
  return (
    <label className="input-date">
      {title} <input className="input-date__field" type="date" value={value} onChange={onChange} />
    </label>
  )
}

export default InputDate
