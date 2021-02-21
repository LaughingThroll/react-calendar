import React from "react"

import Navigation from "../components/CalendarNavigation"

interface IAppState {
  currentDate: Date
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      currentDate: new Date(),
    }
  }

  changeCurrentMonth = (symbol: "-" | "+", value: number) => {
    let currentDate = this.state.currentDate

    if (symbol === "+") {
      currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() + value))
    } else if (symbol === "-") {
      currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() - value))
    }

    this.setState({ currentDate })
  }

  render() {
    return (
      <React.Fragment>
        <Navigation date={this.state.currentDate} changeCurrentMonth={this.changeCurrentMonth} />
      </React.Fragment>
    )
  }
}

export default App
