import React, { useEffect, useState } from 'react'

import FormDates from './common/FormDates'
import InputDate from './common/InputDate'
import { Select, Option } from './common/Select'
import { Modal, ModalBody, ModalFooter, ModalHeader } from './common/Modal'
import Button from './common/Button'

import { useInput, useSelect } from '../hooks'
import { getFutureDate, getCountDays, reverseDate } from '../utils/date'
import { findByID } from '../utils/forArrays'
import { vacationIncludesVacation } from '../utils/vacations'

import { EVacationType, TVacation, ISubmitVacation, IVacation } from '../types/model/vacation'
import { ITeam } from '../types/model/team'
import { patchVacation } from '../api/vacations'

interface ICalendarModal {
  teams: ITeam[]
  isOpen: boolean
  onClose: () => void
}

const CalendarModal: React.FC<ICalendarModal> = ({ teams, isOpen, onClose }) => {
  const [countDays, setCountDays] = useState(0)
  const [isValidDays, setIsValidDays] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const startDate = useInput(getFutureDate(1))
  const endDate = useInput(getFutureDate(8))

  const teamsSelect = useSelect('')
  const membersSelect = useSelect('')
  const typesSelect = useSelect(EVacationType.UN_PAID)

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

  const onSubmit = () => {
    const currentVacation: IVacation = {
      startDate: reverseDate(startDate.value, '-', '.'),
      endDate: reverseDate(endDate.value, '-', '.'),
      type: typesSelect.value as TVacation,
    }

    const submitVacation: ISubmitVacation = {
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

      patchVacation(submitVacation)
        .then((res) => {
          if (res) {
            currentVacations?.push(currentVacation)
            onClose()
            setIsDisabled(false)
          }
        })
        .catch((err) => {
          console.log(err)
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
          <InputDate title="From" onChange={startDate.changeValue} value={startDate.value} name="startDate" />
          <InputDate title="To" onChange={endDate.changeValue} value={endDate.value} name="endDate" />
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
            <Option title="Paid Day Off (PD)" value={EVacationType.UN_PAID} />
            <Option title="Paid Day On (PD)" value={EVacationType.PAID} />
          </Select>
        </FormDates>
      </ModalBody>
      <ModalFooter>
        <Button secondary onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isDisabled} onClick={onSubmit}>
          Send
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default CalendarModal