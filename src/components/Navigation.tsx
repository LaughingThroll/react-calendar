import React from "react"

interface INavigation {
  date: Date
  setNextMonth: () => void
  setPrevMonth: () => void
}

const Navigation: React.FC<INavigation> = ({ date, setPrevMonth, setNextMonth }) => {
  const formatedDate = date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="calendar-nav">
      <button className="calendar-nav__btn calendar-nav__btn--prev-month" onClick={setPrevMonth}></button>
      <div className="calendar-nav__current-date">{formatedDate}</div>
      <button className="calendar-nav__btn calendar-nav__btn--next-month" onClick={setNextMonth}></button>
    </div>
  )
}

export default Navigation
