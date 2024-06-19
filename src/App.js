// useEffect : 첫 번째 argument 딱 한 번만 실행시키고 싶은 코드가 됨
// (+함수형 컴포넌트에서 부수 효과(side effects)를 수행할 수 있게 해줌)

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
