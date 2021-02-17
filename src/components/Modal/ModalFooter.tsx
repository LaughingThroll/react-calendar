import React from "react"
import plus from "../../assets/images/icons/plus.svg"

import { Button } from "../common"

const ModalFooter = () => {
  return (
    <div className="modal-footer">
      <Button secondary>Cancel</Button>
      <Button type="submit">Send</Button>
    </div>
  )
}

export default ModalFooter
