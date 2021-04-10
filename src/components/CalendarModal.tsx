import React, { useState } from 'react'

import FormDates from './common/FormDates'
import InputDate from './common/InputDate'
import { Select, Option } from './common/Select'
import { Modal, ModalBody, ModalFooter, ModalHeader } from './common/Modal'

import { useInput } from '../hooks'

interface ICalendarModal {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

const CalendarModal: React.FC<ICalendarModal> = ({ isOpen, onClose, onSubmit }) => {
  const [countDays, setCountDays] = useState(0)
  const startDate = useInput('2021-04-10')
  const endDate = useInput('2021-04-14')
  // countDays: countDayFromTimeStamp(Date.parse(dateKebabFormat(8)) - Date.parse(dateKebabFormat(1))),
  // disabledBtn: false,
  //   startDate: dateKebabFormat(1),
  //   startDateTimeStamp: Date.parse(dateKebabFormat(1)),
  //   endDate: dateKebabFormat(8),
  //   endDateTimeStamp: Date.parse(dateKebabFormat(8)),

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader title="Vacation Request" countDays={countDays} />
      <ModalBody>
        <FormDates title="Dates" inner>
          <InputDate title="From" onChange={startDate.changeValue} value={startDate.value} name="startDate" />
          <InputDate title="To" onChange={endDate.changeValue} value={endDate.value} name="endDate" />
        </FormDates>
        {/* <FormDates title="Team"> */}
        {/* <Select value={currentTeamId} name="teamId" onChange={this.handleChangeSelect}> */}
        {/* {teams.map(({ name, teamId }: ITeam, index) => ( */}
        {/* <Option key={index} title={name} value={teamId} /> */}
        {/* ))} */}
        {/* </Select> */}
        {/* </FormDates> */}
        {/* <FormDates title="User"> */}
        {/* <Select value={currentMemberId} name="memberId" onChange={this.handleChangeSelect}> */}
        {/* {teams */}
        {/* .find(({ teamId }) => +teamId === +currentTeamId) */}
        {/* ?.members.map(({ name, memberId }) => ( */}
        {/* <Option key={memberId} title={name} value={memberId} /> */}
        {/* ))} */}
        {/* </Select> */}
        {/* </FormDates> */}

        {/* <FormDates title="Vac Type"> */}
        {/* <Select value={currentType} name="type" onChange={this.handleChangeSelect}> */}
        {/* <Option title="Paid Day Off (PD)" value="UnPaid" /> */}
        {/* <Option title="Paid Day On (PD)" value="Paid" /> */}
        {/* </Select> */}
        {/* </FormDates> */}
      </ModalBody>
      {/* <ModalFooter> */}
      {/* <Button secondary onClick={this.changeModalVisible.bind(null, false)}> */}
      {/* Cancel */}
      {/* </Button> */}
      {/* <Button type="submit" disabled={disabledBtn} onClick={this.onSubmit}> */}
      {/* Send */}
      {/* </Button> */}
      {/* </ModalFooter> */}
    </Modal>
  )
}

export default CalendarModal
