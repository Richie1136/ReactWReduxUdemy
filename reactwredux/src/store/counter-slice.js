import { createSlice, configureStore } from "@reduxjs/toolkit"


const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++
    },
    increaseby5(state, action) {
      state.counter = state.counter + action.payload
    },
    decreaseby10(state, action) {
      state.counter = state.counter - action.payload
    },
    decrement(state) {
      state.counter--
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  }
});

export const counterActions = counterSlice.actions



export default counterSlice