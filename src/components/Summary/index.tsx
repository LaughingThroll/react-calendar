import React from 'react'
import { CountUsers, WeekendPercents } from '../../components/common'
import styles from './summary.module.scss'

export interface Summary {
  countUsers: number
  percent: number
  date: Date
  classNames?: string[]
}

const { summary, summary__inner, summary__title, summary__text, summary__users, summary__weekendPercent } = styles

const SummaryComponent: React.FC<Summary> = ({ date, countUsers, percent, classNames = [] }) => {
  return (
    <div className={[summary, ...classNames].join(' ')}>
      <div className={summary__title}>{date.toLocaleDateString('en-US', { month: 'long' })} teams Summary</div>
      <div className={summary__inner}>
        <div className={summary__text}>On vacation</div>
        <CountUsers countUsers={countUsers} classNames={[summary__users]} />
        <WeekendPercents percent={percent} classNames={[summary__weekendPercent]} />
      </div>
    </div>
  )
}

export default React.memo(SummaryComponent)
