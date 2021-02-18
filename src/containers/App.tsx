import React from "react"
import Navigation from "../components/Navigation/Navigation"

const curentD: Date = new Date()

interface IAppProps {
  date?: Date
}

interface IAppState {
  currentDate: Date
}

class App extends React.Component<IAppProps, IAppState> {
  public static defaultProps = {
    d: new Date(),
  }

  constructor(props: IAppProps) {
    super(props)

    this.state = {
      currentDate: curentD,
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
        <h1>App TSX</h1>
        <Navigation date={this.state.currentDate} setNextMonth={this.setNextMonth} setPrevMonth={this.setPrevMonth} />
      </React.Fragment>
    )
  }
}

export default App
