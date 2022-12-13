import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./Component/TodoList";
import {type} from "os";

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    )
}

export default App