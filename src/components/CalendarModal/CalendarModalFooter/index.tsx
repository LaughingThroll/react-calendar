import React from 'react'
import { Button } from '../../common'
import { ModalFooter } from '../../common/Modal'

export interface CalendarModalFooterProps {
  onClose: () => void
  isDisabled: boolean
  onSubmit: () => void
  classNames?: string[]
}

export const CalendarModalFooter: React.FC<CalendarModalFooterProps> = React.memo(
  ({ onClose, isDisabled, onSubmit, classNames = [] }) => {
    return (
      <ModalFooter className={[...classNames]}>
        <Button secondary onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isDisabled} onClick={isDisabled ? () => {} : onSubmit}>
          Send
        </Button>
      </ModalFooter>
    )
  }
)
