import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    console.log(toDos);
    console.log(<li key={index}>{item}</li>);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {/* map : 하나의 array에 있는 item을 자신이 원하는 무엇이든지로
                바꿔주는 역할 */}
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
