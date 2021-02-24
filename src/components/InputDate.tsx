import React from "react"

interface IInputDate extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputDate: React.FC<IInputDate> = ({ title, ...rest }) => {
  return (
    <label className="input-date">
      {title} <input className="input-date__field" type="date" {...rest} />
    </label>
  )
}

export default InputDate
