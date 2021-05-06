import React from 'react'
import styles from './users.module.scss'
import usersSvg from '../../../assets/images/icons/users.svg'

export interface CountUsersProps {
  countUsers: number
  src?: string
  classNames?: string[]
}

const { users, users__count, users__svg } = styles

const CountUsers: React.FC<CountUsersProps> = ({ src = usersSvg, countUsers, classNames = [] }) => {
  return (
    <div className={[users, ...classNames].join(' ')}>
      <img className={users__svg} src={src} alt="" />
      <span className={users__count}>{countUsers}</span>
    </div>
  )
}

export default React.memo(CountUsers)
