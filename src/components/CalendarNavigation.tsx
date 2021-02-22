import React from "react"

interface INavigation {
  date: Date
  nextButton: () => void
  prevButton: () => void
}

const Navigation: React.FC<INavigation> = ({ date, nextButton, prevButton }) => {
  const formatedDate = date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="calendar-nav">
      <button className="calendar-nav__btn calendar-nav__btn--prev-month" onClick={prevButton}></button>
      <div className="calendar-nav__current-date">{formatedDate}</div>
      <button className="calendar-nav__btn calendar-nav__btn--next-month" onClick={nextButton}></button>
    </div>
  )
}

export default Navigation
