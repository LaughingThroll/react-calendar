import React from "react"
        
import Navigation from "../components/CalendarNavigation"
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

  changeCurrentMonth = (symbol: "-" | "+", value: number) => {
    const currentDate = new Date(
      this.state.currentDate.setMonth(this.state.currentDate.getMonth() + parseInt(symbol + value, 10)),
    )
    this.setState({ currentDate })  
  }

  render() {
    const { currentDate, daysInMonth } = this.state

    return (
      <div className="container">
        <Navigation date={this.state.currentDate} changeCurrentMonth={this.changeCurrentMonth} />
        <table className="calendar-table">
          <CalendarHeader date={currentDate} daysInMonth={daysInMonth} />

          <tbody></tbody>
        </table>
      </div>
    )
  }
}

export default App
