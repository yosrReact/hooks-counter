import { combineReducers, createStore } from "redux"

export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
}

// créateur d'action
export const increase = () => {
  //action=objet avec un champ type (au moins)
  return {
    type: types.INCREASE,
  }
}

export const decrease = () => {
  //action=objet avec un champ type (au moins)
  return {
    type: types.DECREASE,
  }
}

export const reset = () => {
  //action=objet avec un champ type (au moins)
  return {
    type: types.RESET,
  }
}

const initialState = {
  count: 0,
  name: "smith",
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      // state.count+=1==> faux !!!!!
      //1ère solution
      // const newState={}
      // newState.count=state.count+1
      // return newState

      const newState = { ...state }
      newState.count += 1
      return newState

    case types.DECREASE:
      return { ...state, count: state.count - 1 }

    case types.RESET: {
      return { ...state, count: 0 }
    }
    default:
      return state
  }
}

const tasks = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
// import { combineReducers } from "redux"

// fonction qui combine tous les reducers
const rootReducer=()=>{
    return combineReducers({
        counter: counter, // on peut remplace par counter
        tasks: tasks
    })
}

export const store=createStore(
    rootReducer(),

)















