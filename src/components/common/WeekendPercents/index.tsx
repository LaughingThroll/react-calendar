import React from 'react'
import styles from './weekendPercents.module.scss'

export interface WeekendPercentsProps {
  percent: number
  classNames?: string[]
}

const { weekendPercent } = styles

const WeekendPercents: React.FC<WeekendPercentsProps> = ({ percent, classNames = [] }) => {
  return <div className={[weekendPercent, ...classNames].join(' ')}>{percent} %</div>
}

export default React.memo(WeekendPercents)
