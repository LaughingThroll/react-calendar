import React, { useEffect, useState } from 'react'

import { Select, Option } from './common/Select/index'
import { Modal, ModalBody, ModalFooter, ModalHeader } from './common/Modal'
import { Button, FormDates, InputDate } from './common'

import { useInput, useSelect } from '../hooks'
import { reverseDate, getCountDays, getFutureOrPastDate } from '../utils/date'
import { findByID } from '../utils/forArrays'
import { vacationIncludesVacation } from '../utils/vacations'

import { VacationTypes, vacationUnion, VacationDTO, Vacation } from '../types/model/vacation'
import { Team } from '../types/model/team'

interface ICalendarModal {
  teams: Team[]
  isOpen: boolean
  onClose: () => void
  onSubmit: (...args: any) => Promise<void>
}

const CalendarModal: React.FC<ICalendarModal> = ({ teams, isOpen, onClose, onSubmit }) => {
  const [countDays, setCountDays] = useState(0)
  const [isValidDays, setIsValidDays] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const startDate = useInput(getFutureOrPastDate(0))
  const endDate = useInput(getFutureOrPastDate(7))

  const teamsSelect = useSelect('')
  const membersSelect = useSelect('')
  const typesSelect = useSelect(VacationTypes.UN_PAID)

  useEffect(() => {
    const localCountDays = getCountDays(startDate.value, endDate.value)
    if (localCountDays > 0) {
      setCountDays(localCountDays)
      setIsValidDays(true)
      setIsDisabled(false)
    } else {
      setIsValidDays(false)
      setIsDisabled(true)
    }
  }, [startDate.value, endDate.value])

  // TODO: It could be done better
  useEffect(() => {
    const currentTeam = findByID(teams, teamsSelect.value)
    teamsSelect.setValue(currentTeam?.id || teams[0]?.id)
    if (currentTeam) {
      const currentMember = currentTeam && findByID(currentTeam.members, membersSelect.value)
      membersSelect.setValue(currentMember?.id || currentTeam?.members[0]?.id)
    }
  }, [teams, teamsSelect, membersSelect])

  const handleOnSubmit = () => {
    const currentVacation: Vacation = {
      startDate: reverseDate(startDate.value, '-', '.'),
      endDate: reverseDate(endDate.value, '-', '.'),
      type: typesSelect.value as vacationUnion,
    }

    const submitVacation: VacationDTO = {
      currentTeamID: teamsSelect.value,
      currentMemberID: membersSelect.value,
      ...currentVacation,
    }

    const currentVacations = teams.flatMap(({ members }) => members).find(({ id }) => id === membersSelect.value)
      ?.vacations
    const hasExistVacation = currentVacations
      ?.map((vacation) => {
        return vacationIncludesVacation({ startDate: startDate.value, endDate: endDate.value }, vacation)
      })
      .some(Boolean)

    if (!hasExistVacation) {
      setIsDisabled(true)
      onSubmit(submitVacation).then(() => {
        onClose()
        setIsDisabled(false)
      })
    } else {
      window.alert('Такой отпуск включает другой отпуск и есть недопустимым в данной системе')
      return
    }
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader className={['calendar-modal']}>
        <h4 className="calendar-modal__title">Vacation Request</h4>
        <div className="calendar-modal__days">{isValidDays ? countDays : 'Is Not Valid'} Days</div>
      </ModalHeader>
      <ModalBody>
        <FormDates title="Dates" inner>
          <InputDate label="From" onChange={startDate.changeValue} value={startDate.value} name="startDate" />
          <InputDate label="To" onChange={endDate.changeValue} value={endDate.value} name="endDate" />
        </FormDates>
        <FormDates title="Team">
          <Select value={teamsSelect.value} onChange={teamsSelect.changeValue} name="teams">
            {teams.map(({ name, id }) => (
              <Option key={id} title={name} value={id} />
            ))}
          </Select>
        </FormDates>
        <FormDates title="User">
          <Select value={membersSelect.value} onChange={membersSelect.changeValue} name="members">
            {findByID(teams, teamsSelect.value)?.members.map(({ name, id }) => (
              <Option key={id} title={name} value={id} />
            ))}
          </Select>
        </FormDates>

        <FormDates title="Vac Type">
          <Select value={typesSelect.value} onChange={typesSelect.changeValue} name="types">
            <Option title="Paid Day Off (PD)" value={VacationTypes.UN_PAID} />
            <Option title="Paid Day On (PD)" value={VacationTypes.PAID} />
          </Select>
        </FormDates>
      </ModalBody>
      <ModalFooter>
        <Button secondary onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isDisabled} onClick={handleOnSubmit}>
          Send
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default React.memo(CalendarModal)
