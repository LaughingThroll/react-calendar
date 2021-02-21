import React from "react"

import Navigation from "../components/Navigation"

interface IAppState {
  currentDate: Date
}

class App extends React.Component<{}, IAppState> {
  state = {
    currentDate: new Date(),
  }

  changeMonth = (stepMonth: number) => {
    const currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() + stepMonth))
    this.setState({ currentDate })
  }

  render() {
    return (
      <Navigation
        date={this.state.currentDate}
        setNextMonth={this.changeMonth.bind(null, 1)}
        setPrevMonth={this.changeMonth.bind(null, -1)}
      />
    )
  }
}

export default App
