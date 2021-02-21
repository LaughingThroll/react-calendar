import React from "react"
import Navigation from "../components/Navigation/Navigation"

interface IAppProps {
  date?: Date
}

interface IAppState {
  currentDate: Date
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = {
      currentDate: new Date(),
    }
  }

  setNextMonth = () => {
    this.setState((prevState) => {
      console.log(prevState)
      const nextState = {
        currentDate: new Date(prevState.currentDate.setMonth(prevState.currentDate.getMonth() + 1)),
      }
      return nextState
    })
  }

  setPrevMonth = () => {
    this.setState((prevState) => {
      console.log(prevState)
      const nextState = {
        currentDate: new Date(prevState.currentDate.setMonth(prevState.currentDate.getMonth() - 1)),
      }
      return nextState
    })
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
