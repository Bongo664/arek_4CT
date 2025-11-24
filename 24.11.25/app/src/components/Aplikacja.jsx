import { useState } from "react";
function Aplikacja() {
    const [inputValue, setInputValue] = useState("")
    const [todoList, setTodoList] = useState([])
    return (
        <>
            <div>
                <input onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => setTodoList([...todoList, inputValue])}>Dodaj do listy</button>
            </div>
            <hr />

            <ul>
                {
                    todoList.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))
                }
            </ul>

        </>
    )
}
export default Aplikacja