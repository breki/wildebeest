import React, { useState } from 'react';
import Amount from './Amount';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Amount />
    </div>
  );
}