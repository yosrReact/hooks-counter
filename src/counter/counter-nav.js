import React from "react"
import { useDispatch } from "react-redux"
import {increase, decrease, reset} from '../redux'
export const CounterNav = () => {
  const dispatch = useDispatch()
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch(decrease())
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch(reset())

        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increase())          
        }}
      >
        Increase
      </button>
    </div>
  )
}

export default CounterNav
