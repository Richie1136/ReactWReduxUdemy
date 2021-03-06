import './Counter.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { counterActions } from '../../store/counter-slice';
import { Component } from 'react';

// Function based version 

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const toggle = useSelector(state => state.counter.showCounter)


  const increment = () => {
    dispatch(counterActions.increment())
  }

  const increaseby5 = () => {
    dispatch(counterActions.increaseby5(5))
  }

  const decreaseby10 = () => {
    dispatch(counterActions.decreaseby10(10))
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      {toggle && <div className='value'>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increaseby5}>Increase by 5</button>
        <button onClick={decreaseby10}>Decrease by 10</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// Class based version 


// class Counters extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()

//   }

//   toggleCounterHandlers() {

//   }

//   render() {
//     return (
//       <main className='counter'>
//         <h1>Redux Counter</h1>
//         <div className='value'>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandlers}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counters)