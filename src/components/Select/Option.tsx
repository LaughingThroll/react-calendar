import React from "react"

interface IOption {
  title: string
  value: string
}

const Option = ({ title, value }: IOption) => {
  return (
    <option className="select__option" value={value}>
      {title}
    </option>
  )
}

export default Option
