import React from 'react'
import classnames from 'classnames'

import { isWeekend } from '../../../../utils/date'
import styles from './../cells.module.scss'

import { CellVariants } from '../../../../types/cell'

export interface CellSummProps {
  cellDate?: Date
  variant?: CellVariants
  classNames?: string[]
  children?: any
}

const { cellSumm, cellGray } = styles

const CellSumm: React.FC<CellSummProps> = ({ cellDate, variant = CellVariants.TD, children, classNames = [] }) => {
  return React.createElement(
    variant,
    {
      className: `${classnames({
        [cellSumm]: true,
        [cellGray]: cellDate && isWeekend(cellDate),
      })} ${classNames.join(' ')}`,
    },
    children
  )
}

export default React.memo(CellSumm)
