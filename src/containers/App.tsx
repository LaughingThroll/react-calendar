import React from "react"

import Navigation from "../components/Navigation"

interface IAppState {
  currentDate: Date
}

class App extends React.Component {
  state: IAppState = {
    currentDate: new Date(),
  }

  setNextMonth = () => {
    const currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() + 1))
    this.setState({ currentDate })
  }

  setPrevMonth = () => {
    const currentDate = new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() - 1))
    this.setState({ currentDate })
  }

  render() {
    return (
      <React.Fragment>
        <Navigation date={this.state.currentDate} setNextMonth={this.setNextMonth} setPrevMonth={this.setPrevMonth} />
      </React.Fragment>
    )
  }
}

export default App
