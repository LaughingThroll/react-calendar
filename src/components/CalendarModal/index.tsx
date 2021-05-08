import React, { useEffect, useState } from 'react'

import { CalendarModalHeader } from './CalendarModalHeader'
import { CalendarModalFooter } from './CalendarModalFooter'
import { FormDates, FormTeamsSelect, FormMembersSelect, FormVacationTypeSelect } from './../CalendarFormItems'

import { Modal, ModalBody } from '../common/Modal'
import { Form, Alert } from '../common'

import { useInput, useSelect, useCountDays } from '../../hooks'
import { getFutureOrPastDate } from '../../utils/date'
import { findByID } from '../../utils/forArrays'
import { hasExistVacation, getMemberVacations } from '../../utils/vacations'

import { VacationTypes, vacationUnion, VacationDTO, Vacation, VacationDate } from '../../types/model/vacation'
import { Team } from '../../types/model/team'

enum ErrorsMessage {
  MEMBER_IS_UNDEFINED = 'Такого пользователя не существует',
  VACATION_INCLUDE_VACATION = 'Такой отпуск уже существует или включает другой отпуск',
}

export interface CalendarModalProps {
  teams: Team[]
  isOpen: boolean
  onClose: () => void
  onSubmit: (...args: any) => Promise<void>
}

const CalendarModal: React.FC<CalendarModalProps> = ({ teams, isOpen, onClose, onSubmit }) => {
  console.log('Team', teams)
  const startDate = useInput(getFutureOrPastDate(0))
  const endDate = useInput(getFutureOrPastDate(7))
  const [isDisabled, setIsDisabled] = useState(false)
  const { countDays, isValidDays } = useCountDays(startDate.value, endDate.value)
  const [errorMessage, setErrorMessage] = useState('')

  const teamsSelect = useSelect('')
  const membersSelect = useSelect('')
  const typesSelect = useSelect(VacationTypes.UN_PAID)

  const [currentVacations, setCurrentVacations] = useState<Vacation[] | undefined>(undefined)

  useEffect(() => {
    setIsDisabled(!isValidDays)
  }, [isValidDays])

  // TODO: It could be done better
  useEffect(() => {
    const currentTeam = findByID(teams, teamsSelect.value)
    const defaultTeamID = currentTeam?.id || teams[0]?.id
    teamsSelect.setValue(defaultTeamID)
    console.log('TeamSelectValue', teamsSelect.value)
    const currentMember = currentTeam && findByID(currentTeam.members, membersSelect.value)
    if (currentTeam) {
      const defaultMemberID = currentMember?.id || currentTeam?.members[0]?.id
      membersSelect.setValue(defaultMemberID)
      console.log('MemberSelectValue', membersSelect.value)
    }
  }, [teams, teamsSelect, membersSelect])

  useEffect(() => {
    setCurrentVacations(getMemberVacations(teams, membersSelect.value))
  }, [teams, membersSelect.value])

  // It's bad fn need rebuild
  const handleOnSubmit = () => {
    const vacationDate: VacationDate = {
      startDate: startDate.value,
      endDate: endDate.value,
    }

    const currentVacation: Vacation = {
      type: typesSelect.value as vacationUnion,
      ...vacationDate,
    }

    const submitVacation: VacationDTO = {
      currentTeamID: teamsSelect.value,
      currentMemberID: membersSelect.value,
      ...currentVacation,
    }

    if (!currentVacations) {
      return setErrorMessage(ErrorsMessage.MEMBER_IS_UNDEFINED)
    }

    if (!hasExistVacation(currentVacations, vacationDate)) {
      setIsDisabled(true)
      onSubmit(submitVacation).then(() => {
        onClose()
        setIsDisabled(false)
      })
    } else {
      return setErrorMessage(ErrorsMessage.VACATION_INCLUDE_VACATION)
    }
  }

  const handleAccept = () => {
    setErrorMessage('')
  }

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <CalendarModalHeader isValidDays={isValidDays} countDays={countDays} />
        <ModalBody>
          <Form>
            <FormDates
              startDate={{ changeValue: startDate.changeValue, value: startDate.value }}
              endDate={{ changeValue: endDate.changeValue, value: endDate.value }}
            />

            <FormTeamsSelect
              teams={teams}
              select={{ changeValue: teamsSelect.changeValue, value: teamsSelect.value }}
            />

            <FormMembersSelect
              teams={teams}
              teamId={teamsSelect.value}
              select={{ changeValue: membersSelect.changeValue, value: membersSelect.value }}
            />

            <FormVacationTypeSelect select={{ changeValue: typesSelect.changeValue, value: typesSelect.value }} />
          </Form>
        </ModalBody>

        <CalendarModalFooter onClose={onClose} onSubmit={handleOnSubmit} isDisabled={isDisabled} />

        {errorMessage ? <Alert message={errorMessage} error onAccept={handleAccept} /> : <></>}
      </Modal>
    </>
  )
}

export default React.memo(CalendarModal)
