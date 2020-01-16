import React, { useState } from 'react';
import Amount from './Amount';
import TransDate from './TransDate';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="form">
      <TransDate />
      <Amount />
    </div>
  );
}