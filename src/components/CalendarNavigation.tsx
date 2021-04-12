import React, { useEffect, useCallback } from 'react'

enum ENavigationDirection {
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

enum EMonthNavigation {
  NEXT = 'next',
  PREV = 'prev',
}

type monthNavigation = EMonthNavigation.NEXT | EMonthNavigation.PREV

interface INavigation {
  date: Date
  onChangeMonth: (date: Date) => void
}

const Navigation: React.FC<INavigation> = ({ date, onChangeMonth }) => {
  const formatedDate = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const changeMonth = useCallback(
    (value: monthNavigation) => {
      let num = 0
      if (value === EMonthNavigation.NEXT) num = 1
      if (value === EMonthNavigation.PREV) num = -1
      onChangeMonth(new Date(date.setMonth(date.getMonth() + num)))
      // this.setState({ currentDate, daysInMonth: daysInMonth(currentDate) })
    },
    [date, onChangeMonth],
  )

  const switchMonthOnKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ENavigationDirection.ARROW_LEFT) changeMonth(EMonthNavigation.PREV)
      if (e.key === ENavigationDirection.ARROW_RIGHT) changeMonth(EMonthNavigation.NEXT)
    },
    [changeMonth],
  )

  useEffect(() => {
    window.addEventListener('keyup', switchMonthOnKey)

    return () => {
      window.removeEventListener('keyup', switchMonthOnKey)
    }
  }, [switchMonthOnKey])

  return (
    <div className="calendar-nav">
      <button
        className="calendar-nav__btn calendar-nav__btn--prev-month"
        onClick={() => changeMonth(EMonthNavigation.PREV)}
      ></button>
      <div className="calendar-nav__current-date">{formatedDate}</div>
      <button
        className="calendar-nav__btn calendar-nav__btn--next-month"
        onClick={() => changeMonth(EMonthNavigation.NEXT)}
      ></button>
    </div>
  )
}

export default React.memo(Navigation)
