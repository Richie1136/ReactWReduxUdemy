import './Counter.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { Component } from 'react';

// Function based version 

// const Counter = () => {

//   const counter = useSelector(state => state.counter)
//   const dispatch = useDispatch()

//   const increment = () => {
//     dispatch({ type: 'increment' })
//   }

//   const decrement = () => {
//     dispatch({ type: 'decrement' })
//   }

//   const toggleCounterHandler = () => {

//   };

//   return (
//     <main className='counter'>
//       <h1>Redux Counter</h1>
//       <div className='value'>{counter}</div>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;



// Class based version 

class Counters extends Component {
  incrementHandler() {
    this.props.increment()
  }

  decrementHandler() {
    this.props.decrement()

  }

  toggleCounterHandlers() {

  }

  render() {
    return (
      <main className='counter'>
        <h1>Redux Counter</h1>
        <div className='value'>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandlers}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)