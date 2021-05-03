import React from 'react'
import styles from './users.module.scss'

export interface Users {
  countUsers: number
  classNames?: string[]
}

const { users, users__count, users__svg } = styles

const UsersComponent: React.FC<Users> = ({ countUsers, classNames = [] }) => {
  return (
    <div className={[users, ...classNames].join(' ')}>
      <img className={users__svg} src="./../../../assets/users.svg" alt="" />
      <span className={users__count}>{countUsers}</span>
    </div>
  )
}

export default React.memo(UsersComponent)
