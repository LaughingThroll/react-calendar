import React from "react"

import Navigation from "../components/Navigation"
import CalendarHeader from "../components/CalendarHeader/CalendarHeader"

import { daysInMonth } from "../utils/date"

interface IAppState {
  currentDate: Date
  daysInMonth: number
}

class App extends React.Component {
  state: IAppState = {
    currentDate: new Date(),
    daysInMonth: daysInMonth(new Date()),
  }

  setNextMonth = () => {
    const currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() + 1))
    this.setState({ currentDate, daysInMonth: daysInMonth(currentDate) })
  }

  setPrevMonth = () => {
    const currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() - 1))
    this.setState({ currentDate, daysInMonth: daysInMonth(currentDate) })
  }

  render() {
    const { currentDate, daysInMonth } = this.state

    return (
      <div className="container">
        <Navigation date={currentDate} setNextMonth={this.setNextMonth} setPrevMonth={this.setPrevMonth} />
        <table className="calendar-table">
          <CalendarHeader date={currentDate} daysInMonth={daysInMonth} />

          <tbody></tbody>
        </table>
      </div>
    )
  }
}

export default App
