import React from 'react'
import { FormItem } from '../../common'
import { Select, Option } from '../../common/Select'

import { Team } from '../../../types/model/team'
import { ControlForSelect } from '../../../types/controls'

export interface FormTeamsSelectProps {
  teams: Team[]
  select: ControlForSelect
  classNames?: string[]
}

const FormTeamsSelect: React.FC<FormTeamsSelectProps> = ({ teams, select, classNames = [] }) => {
  return (
    <FormItem title="Teams" classNames={classNames}>
      <Select value={select.value} onChange={select.changeValue} name="teams">
        {teams.map(({ name, id }) => {
          return <Option key={id} title={name} value={id} />
        })}
      </Select>
    </FormItem>
  )
}

export default React.memo(FormTeamsSelect)
