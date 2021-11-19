import { createStore } from "redux"


const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increaseby5') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter
    }
  }


  if (action.type === 'decreaseby10') {
    return {
      counter: state.counter - action.payload,
      showCounter: state.showCounter

    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter

    }
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter

    }
  }
  return state
}

const store = createStore(counterReducer)

export default store