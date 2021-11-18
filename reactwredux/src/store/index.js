import { createStore } from "redux"

const store = createStore(counterReducer)

const counterReducer = (state = 0, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }


  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
  return state
}


export default store