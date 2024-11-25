import "./App.css";
import Header from "./components/header";
import List from "./components/List";
import Editer from "./components/Editer";

function App() {
    return (
        <div className="App">
            <Header />
            <Editer />
            <List />
        </div>
    );
}

export default App;
