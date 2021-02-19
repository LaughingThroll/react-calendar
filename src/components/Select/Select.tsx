import React from "react"

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children?: JSX.Element | JSX.Element[]
  value?: string
}

const Select = ({ children, value, ...rest }: ISelect) => {
  return (
    <div className="select">
      <select className="select__main" value={value} {...rest}>
        {children}
      </select>
    </div>
  )
}

export default Select
