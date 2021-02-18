import React from "react"

interface IOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  title: string
}

const Option = ({ title, ...rest }: IOption) => {
  return (
    <option className="select__option" {...rest}>
      {title}
    </option>
  )
}

export default Option
