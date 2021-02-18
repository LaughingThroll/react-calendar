import React from "react"

type INavigation = {
  date: Date
  setNextMonth: () => void
  setPrevMonth: () => void
  // toLocaleDateString: (
  //   locales: string,
  //   options: {month: string, year: string}
  // ) => string
}

const Navigation: React.FC<INavigation> = (props) => {
  // const convertedDate = date.toLocaleDateString(
  //   "en-US",
  //   { month: "long", year: "numeric" }
  // )
  const formatedDate = props.date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="calendar-nav">
      <button className="calendar-nav__btn calendar-nav__btn--prev-month" onClick={() => props.setPrevMonth()}></button>
      <p className="calendar-nav__current-date">{formatedDate}</p>
      <button className="calendar-nav__btn calendar-nav__btn--next-month" onClick={() => props.setNextMonth()}></button>
    </div>
  )
}

export default Navigation
