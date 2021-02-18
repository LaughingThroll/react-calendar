import React, { Component } from "react"
import arrowDown from "../assets/images/icons/arrow--down.svg"

import { Button } from "./../components/common"
import FormDates from "./../components/FormDates"
import InputDate from "./../components/InputDate"

import { Select, Option } from "../components/Select/"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../components/Modal"

interface IAppState {
  isOpen: boolean
}

class App extends Component {
  state: IAppState = {
    isOpen: true,
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  onSumbit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log("Submit")
  }
  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  render() {
    const { isOpen } = this.state

    return (
      <Modal open={isOpen} onClose={this.closeModal}>
        <ModalHeader title="Vacation Request" countDays={8} />
        <ModalBody>
          <FormDates title="Dates" isInner>
            <InputDate title="From" onChange={this.handleChangeInput} value="2021-02-17" />
            <InputDate title="To" onChange={this.handleChangeInput} value="2021-02-17" />
          </FormDates>
          <FormDates title="Vac Type">
            <Select onChange={this.handleChangeSelect} icon={arrowDown}>
              <Option title="Paid Day Off (PD)" value={"off"} />
              <Option title="Paid Day On (PD)" value={"on"} />
            </Select>
          </FormDates>
        </ModalBody>
        <ModalFooter>
          <Button secondary onClick={this.closeModal}>
            Cancel
          </Button>
          <Button type="submit" onClick={this.onSumbit}>
            Send
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default App
