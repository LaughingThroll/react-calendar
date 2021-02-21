import React from "react"

interface INavigation {
  date: Date
  changeCurrentMonth: (symbol: "-" | "+", value: number) => void
}

const Navigation: React.FC<INavigation> = ({ date, changeCurrentMonth }) => {
  const formatedDate = date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="calendar-nav">
      <button
        className="calendar-nav__btn calendar-nav__btn--prev-month"
        onClick={() => changeCurrentMonth("-", 2)}
      ></button>
      <div className="calendar-nav__current-date">{formatedDate}</div>
      <button
        className="calendar-nav__btn calendar-nav__btn--next-month"
        onClick={() => changeCurrentMonth("+", 1)}
      ></button>
    </div>
  )
}

export default Navigation
