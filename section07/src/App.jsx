import "./App.css";
import Header from "./components/header";
import List from "./components/List";
import Editer from "./components/Editer";
import { useState, useRef } from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <div className="App">
            <Header />
            <Editer onCreate={onCreate} />
            <List />
        </div>
    );
}

export default App;
