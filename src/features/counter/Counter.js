import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(reset())}>0</button>
      <hr />
      <h3>Enter Amount</h3>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        Add Amount
      </button>
      <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>
        Minus Amount
      </button>
    </div>
  );
};

export default Counter;
