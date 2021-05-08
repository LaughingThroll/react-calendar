import React from 'react'
import { FormItem } from '../../common'
import { Select, Option } from '../../common/Select'
import { findByID } from '../../../utils/forArrays'

import { Team } from '../../../types/model/team'
import { ControlForSelect } from '../../../types/controls'

export interface FormMembersSelectProps {
  teams: Team[]
  teamId: string
  select: ControlForSelect
  classNames?: string[]
}

const FormMembersSelect: React.FC<FormMembersSelectProps> = ({ teams, select, teamId, classNames = [] }) => {
  return (
    <FormItem title="User" classNames={classNames}>
      <Select onChange={select.changeValue} value={select.value} name="members">
        {findByID(teams, teamId)?.members.map(({ name, id }) => (
          <Option key={id} title={name} value={id} />
        ))}
      </Select>
    </FormItem>
  )
}

export default React.memo(FormMembersSelect)
