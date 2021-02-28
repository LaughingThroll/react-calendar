import React from "react"

interface IOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  title: string
}

const Option: React.FC<IOption> = ({ title, ...rest }) => {
  return (
    <option className="select__option" {...rest}>
      {title}
    </option>
  )
}

export default Option
