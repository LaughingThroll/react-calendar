import React, { useEffect, useCallback } from 'react'

enum NavigationDirection {
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

enum MonthNavigation {
  NEXT = 'next',
  PREV = 'prev',
}

type monthNavigationUnion = MonthNavigation.NEXT | MonthNavigation.PREV

interface INavigation {
  date: Date
  onChangeMonth: (date: Date) => void
}

const Navigation: React.FC<INavigation> = ({ date, onChangeMonth }) => {
  const formatedDate = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const changeMonth = useCallback(
    (value: monthNavigationUnion) => {
      let num = 0
      if (value === MonthNavigation.NEXT) num = 1
      if (value === MonthNavigation.PREV) num = -1
      onChangeMonth(new Date(date.setMonth(date.getMonth() + num)))
    },
    [date, onChangeMonth]
  )

  const switchMonthOnKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === NavigationDirection.ARROW_LEFT) changeMonth(MonthNavigation.PREV)
      if (e.key === NavigationDirection.ARROW_RIGHT) changeMonth(MonthNavigation.NEXT)
    },
    [changeMonth]
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
        onClick={() => changeMonth(MonthNavigation.PREV)}
      ></button>
      <div className="calendar-nav__current-date">{formatedDate}</div>
      <button
        className="calendar-nav__btn calendar-nav__btn--next-month"
        onClick={() => changeMonth(MonthNavigation.NEXT)}
      ></button>
    </div>
  )
}

export default React.memo(Navigation)
