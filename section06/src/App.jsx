import { useState } from "react";
import "./App.css";
import Viewer from "./componants/Viewer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Viewer />
        </>
    );
}

export default App;
