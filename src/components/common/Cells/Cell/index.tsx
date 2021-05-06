import React from 'react'
import classnames from 'classnames'

import styles from './../cells.module.scss'

import { isWeekend } from '../../../../utils/date'

import { CellVariants } from '../../../../types/cell'

export interface CellProps {
  cellDate?: Date
  variant?: CellVariants
  classNames?: string[]
  children?: any
}

const { cellGray } = styles

const Cell: React.FC<CellProps> = ({ variant = CellVariants.TD, children, cellDate, classNames = [] }) => {
  return React.createElement(
    variant,
    {
      className: `${classnames({
        [cellGray]: cellDate && isWeekend(cellDate),
      })}  ${classNames.join(' ')}`,
    },
    children
  )
}

export default React.memo(Cell)
