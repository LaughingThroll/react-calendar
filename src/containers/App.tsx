import React from "react"

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

  render() {
    const { currentDate, daysInMonth } = this.state

    return (
      <div className="container">
        <table className="calendar-table">
          <CalendarHeader date={currentDate} daysInMonth={daysInMonth} />

          <tbody></tbody>
        </table>
      </div>
    )
  }
}

export default App
