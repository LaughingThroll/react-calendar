import React from "react"

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children?: JSX.Element | JSX.Element[]
  value?: string
}

const Select: React.FC<ISelect> = ({ children, value, ...rest }) => {
  return (
    <div className="select">
      <select className="select__main" value={value} {...rest}>
        {children}
      </select>
    </div>
  )
}

export default Select
