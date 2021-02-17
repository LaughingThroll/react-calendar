import React from "react"
import ReactDOM from "react-dom"

import "./styles/index.scss"

import { App, Modal } from "./containers"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Modal />
  </React.StrictMode>,
  document.getElementById("root"),
)
