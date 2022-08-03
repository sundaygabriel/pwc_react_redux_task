import React from "react";
import { useSelector } from "react-redux";
// import Counter from './Counter';
const Display = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="display">
      <h3>Display</h3>
      <h1 className="count">{count}</h1>
    </div>
  );
};

export default Display;
