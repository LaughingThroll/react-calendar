import React, { Component } from "react"

import { ModalHeader, ModalBody, ModalFooter } from "./../components/Modal"

export class Modal extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <ModalHeader />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    )
  }
}

export default Modal
