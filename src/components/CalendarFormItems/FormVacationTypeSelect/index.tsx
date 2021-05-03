import React from 'react'
import { FormItem } from '../../common'
import { Select, Option } from '../../common/Select'

import { ControlForSelect } from '../../../types/controls'
import { VacationTypes } from '../../../types/model/vacation'

export interface FormVacationTypeSelectProps {
  select: ControlForSelect
  classNames?: string[]
}

const FormVacationTypeSelect: React.FC<FormVacationTypeSelectProps> = ({ select, classNames = [] }) => {
  return (
    <FormItem title="Vac Type" classNames={classNames}>
      <Select onChange={select.changeValue} value={select.value} name="types">
        <Option title="Paid Day Off (PD)" value={VacationTypes.UN_PAID} />
        <Option title="Paid Day On (PD)" value={VacationTypes.PAID} />
      </Select>
    </FormItem>
  )
}

export default React.memo(FormVacationTypeSelect)
