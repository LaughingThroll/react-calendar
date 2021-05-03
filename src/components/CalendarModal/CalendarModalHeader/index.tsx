import React from 'react'
import styles from './calendarModalHeader.module.scss'

import { ModalHeader } from '../../common/Modal'

export interface CalendarModalHeaderProps {
  isValidDays: boolean
  countDays: number
  classNames?: string[]
}

export enum ErrorsText {
  IS_NOT_VALID_DAYS = 'Is Not Valid',
}

const { calendarModalHeader, calendarModalHeader__title, calendarModalHeader__days } = styles

export const CalendarModalHeader: React.FC<CalendarModalHeaderProps> = React.memo(
  ({ isValidDays, countDays, classNames = [] }) => {
    return (
      <ModalHeader className={[calendarModalHeader, ...classNames]}>
        <h4 className={calendarModalHeader__title}>Vacation Request</h4>
        <div className={calendarModalHeader__days}> {isValidDays ? countDays : ErrorsText.IS_NOT_VALID_DAYS} Days</div>
      </ModalHeader>
    )
  }
)
