import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {

    const data = [
        {label: "Drink Coffee", important: false, id: 1},
        {label: "Suit Up", important: false, id: 2},
        {label: "Learn React", important: true, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader todo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={data}/>
        </div>
    );
};

export default App;