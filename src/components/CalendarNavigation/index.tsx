import React, { useEffect, useCallback } from 'react'
import styles from './calendarNavigation.module.scss'

enum NavigationDirection {
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

enum MonthNavigation {
  NEXT = 'next',
  PREV = 'prev',
}

type monthNavigationUnion = MonthNavigation.NEXT | MonthNavigation.PREV

export interface Navigation {
  date: Date
  onChangeMonth: (date: Date) => void
  classNames?: string[]
}

const {
  calendarNavigation,
  calendarNavigation__currentDate,
  calendarNavigation__btn,
  calendarNavigation__btn_prevMonth,
  calendarNavigation__btn_nextMonth,
} = styles

const CalendarNavigation: React.FC<Navigation> = ({ date, onChangeMonth, classNames = [] }) => {
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
    <div className={[calendarNavigation, ...classNames].join(' ')}>
      <button
        className={[calendarNavigation__btn, calendarNavigation__btn_prevMonth].join(' ')}
        onClick={() => changeMonth(MonthNavigation.PREV)}
      ></button>
      <div className={calendarNavigation__currentDate}>{formatedDate}</div>
      <button
        className={[calendarNavigation__btn, calendarNavigation__btn_nextMonth].join(' ')}
        onClick={() => changeMonth(MonthNavigation.NEXT)}
      ></button>
    </div>
  )
}

export default React.memo(CalendarNavigation)
