import React from "react"

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children?: JSX.Element | JSX.Element[]
  value?: string
}

const Select = ({ icon, children, value, ...rest }: ISelect) => {
  return (
    <div className="select">
      <select className="select__main" value={value} {...rest}>
        {children}
      </select>
      {icon && <span className="select__arrow" style={{ backgroundImage: `url(${icon})` }}></span>}
    </div>
  )
}

export default Select
