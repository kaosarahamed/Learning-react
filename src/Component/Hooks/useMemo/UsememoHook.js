import React, { useMemo, useState } from "react";
function UsememoHook() {
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 5000000000; index++) {
      return number++;
    }
  }, []);

  return (
    <div>
      <p>Number : {calculation}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increement</button>
    </div>
  );
}

export default UsememoHook;
