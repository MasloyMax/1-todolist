import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./Component/TodoList";


// type AppPropsType = {
//     title: string,
//     tasks: any
// }

function App() {
    const todoListTitle_1:string = 'What to learn'
    const todoListTitle_2:string = 'What to buy'
    const tasks_1:Array<TaskType> = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JAVASCRIPT AND TYPESCRIPT", isDone: true},
        {id: 3, title: "REACT", isDone: false}
    ]
    const tasks_2:Array<TaskType> = [
        {id: 1, title: "TASKA", isDone: true},
        {id: 2, title: "JIRA", isDone: true},
        {id: 3, title: "VUI", isDone: false}
    ]
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App