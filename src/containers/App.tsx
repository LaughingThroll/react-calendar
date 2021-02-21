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
    const currentDate = new Date(
      this.state.currentDate.setMonth(this.state.currentDate.getMonth() + parseInt(symbol + value, 10)),
    )
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
