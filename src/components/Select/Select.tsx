import React from "react"

interface ISelect {
  icon?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children?: JSX.Element | JSX.Element[]
}

const Select = ({ icon, onChange, children }: ISelect) => {
  return (
    <div className="select">
      <select className="select__main" onChange={onChange}>
        {children}
      </select>
      {icon && <span className="select__arrow" style={{ backgroundImage: `url(${icon})` }}></span>}
    </div>
  )
}

export default Select
