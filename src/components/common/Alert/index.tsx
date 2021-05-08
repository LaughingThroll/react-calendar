import React from 'react'
import classnames from 'classnames'
import styles from './alert.module.scss'

import { Button } from '../'
import { TChildren } from '../../../types/utilsTypes'

export interface AlertProps {
  onAccept: () => void
  message: TChildren
  success?: boolean
  error?: boolean
  warning?: boolean
  classNames?: string[]
  buttonText?: TChildren
}

const {
  alert,
  alertWrapper,
  alert__message,
  alert__message_error,
  alert__message_success,
  alert__message_warning,
  alert__button,
  alert__button_error,
  alert__button_success,
  alert__button_warning,
} = styles

const Alert: React.FC<AlertProps> = ({
  message = 'Alert fake',
  onAccept,
  buttonText = 'Okey',
  error,
  success,
  warning,
  classNames = [],
}) => {
  return (
    <div className={alertWrapper}>
      <div className={[alert, ...classNames].join(' ')}>
        <p
          className={classnames({
            [alert__message]: true,
            [alert__message_error]: error,
            [alert__message_success]: success,
            [alert__message_warning]: warning,
          })}
        >
          {message}
        </p>
        <Button
          onClick={onAccept}
          classNames={classnames({
            [alert__button]: true,
            [alert__button_error]: error,
            [alert__button_success]: success,
            [alert__button_warning]: warning,
          }).split(' ')}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default React.memo(Alert)
