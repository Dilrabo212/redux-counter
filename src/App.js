import { useDispatch, useSelector } from "react-redux";
import {actions} from './store'

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch( actions.increment() );
  }
  const decrement = () => {
    dispatch( actions.decrement());
  }
  const reset = () => {
    dispatch(actions.reset());
  }
  const addBy = () => {
    dispatch(actions.addBy(10));
  }
  return (

    <div className="AppWrap">
      <h1 className="AppCounter">Counter: {counter}</h1>
    
    <div className="AppButtons">
    <button className="AppButtonIncriment" onClick={increment}>Increment</button>
      <button className="AppButtonDecrement" onClick={decrement}>Decrement</button>
      <button className="AppButtonReset" onClick={reset}>Reset</button>
      <button className="AppButtonAddBy" onClick={addBy}>Add by 10</button>
     </div>
    </div>

  );
}

export default App;
