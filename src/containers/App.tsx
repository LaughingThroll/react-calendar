import React from "react"

import departmentParts from "../api/DB"

import Navigation from "../components/CalendarNavigation"
import CalendarHeader from "../components/CalendarHeader/CalendarHeader"
import Team from "../components/Team"

import { daysInMonth } from "../utils/date"
import { ITeam } from "../types/DB"

interface IAppState {
  currentDate: Date
  daysInMonth: number
  teams: ITeam[]
}

class App extends React.Component {
  state: IAppState = {
    currentDate: new Date(),
    daysInMonth: daysInMonth(new Date()),
    teams: [],
  }

  componentDidMount() {
    this.setState({ teams: departmentParts.teams })
  }

  changeCurrentMonth = (symbol: "-" | "+", value: number) => {
    const currentDate = new Date(
      this.state.currentDate.setMonth(this.state.currentDate.getMonth() + parseInt(symbol + value, 10)),
    )
    this.setState({ currentDate, daysInMonth: daysInMonth(currentDate) })
  }

  render() {
    const { currentDate, daysInMonth, teams } = this.state

    console.log(teams)
    return (
      <div className="container">
        <Navigation date={this.state.currentDate} changeCurrentMonth={this.changeCurrentMonth} />
        <table className="calendar-table">
          <CalendarHeader date={currentDate} daysInMonth={daysInMonth} />

          <tbody>
            {teams.map((team: ITeam, index: number) => (
              <Team key={team.teamId} team={team} date={currentDate} allDaysInMonth={daysInMonth} themeIndex={index} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
