import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import { store } from "./redux"

import App from "./App"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")
console.log("store", store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
