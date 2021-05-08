import React from 'react'

import Cell from '../../common/Cells/Cell'

import { getDayInBinaryString } from '../../../utils/date'

import { CellVariants } from '../../../types/cell'

export interface CalendarHeaderCellProps {
  cellDate: Date
  classNames?: string[]
}

const CalendarHeaderCell: React.FC<CalendarHeaderCellProps> = ({ cellDate, classNames = [] }) => {
  return (
    <Cell cellDate={cellDate} variant={CellVariants.TH} classNames={classNames}>
      <span className="calendar-header__day">{getDayInBinaryString(cellDate)}</span>
      <span className="calendar-header__number">{cellDate.getDate()}</span>
    </Cell>
  )
}

export default React.memo(CalendarHeaderCell)
