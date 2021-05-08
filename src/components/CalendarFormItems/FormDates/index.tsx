import React from 'react'
import { FormItem, InputDate } from '../../common'

import { ControlForInput } from '../../../types/controls'

export interface FormDatesProps {
  startDate: ControlForInput
  endDate: ControlForInput
  classNames?: string[]
}

const FormDates: React.FC<FormDatesProps> = ({ startDate, endDate, classNames = [] }) => {
  return (
    <FormItem title="Dates" classNames={classNames} inner>
      <InputDate label="From" onChange={startDate.changeValue} value={startDate.value} name="startDate" />
      <InputDate label="To" onChange={endDate.changeValue} value={endDate.value} name="endDate" />
    </FormItem>
  )
}

export default React.memo(FormDates)
