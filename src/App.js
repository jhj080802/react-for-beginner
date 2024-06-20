// useEffect : 첫 번째 argument 딱 한 번만 실행시키고 싶은 코드가 됨
// (+함수형 컴포넌트에서 부수 효과(side effects)를 수행할 수 있게 해줌)

import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("i run all the time");

    // 딱 한 번만 실행 시킴
    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]);

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
