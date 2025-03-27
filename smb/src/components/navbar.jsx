import { useState } from 'react';

export function NavBar() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Starting out, count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}