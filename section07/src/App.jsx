import "./App.css";
import Header from "./components/header";
import List from "./components/List";
import Editer from "./components/Editer";
import { useState } from "react";
const mockData = [
    {id:0, isDone: false, content: "React공부하기", Date: New Date().getTime() },
    {id:1, isDone: false, content: "빨래하기", Date: New Date().getTime() },
    {id:2, isDone: false, content: "노래 연습하기", Date: New Date().getTime() },
]   ;
    
function App() {

    const [todos, setTodos] = useState([    ]);
    return (
        <div className="App">
            <Header />
            <Editer />
            <List />
        </div>
    );
}

export default App;
