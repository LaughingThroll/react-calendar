import React from 'react'
import styles from './weekendPercents.module.scss'

export interface WeekendPercents {
  percent: number
  classNames?: string[]
}

const { weekendPercent } = styles

const WeekendPercentsComponent: React.FC<WeekendPercents> = ({ percent, classNames = [] }) => {
  return <div className={[weekendPercent, ...classNames].join(' ')}>{percent} %</div>
}

export default React.memo(WeekendPercentsComponent)
