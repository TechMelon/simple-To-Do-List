import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState<string[]>(["Learn typescript"])
    const [newTasks, setNewTasks] = useState<string>("") ;
    
    function handleChange(event:any) {
        setNewTasks(event.target.value)
    }
    function addtask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t,newTasks]);
        setNewTasks("");
        }
    }
    function delTask(index:number) {
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }

    return(
        <div className="to-do-list">
        <h1>TO-DO-LIST</h1>
        <div>
        <input type="text" placeholder="Enter the task..." value = {newTasks} onChange = {handleChange}/>
        <button id="addBtn" onClick={addtask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index) => (
                <li key={index}>
                    <span>{task}</span>
                    <button className="delete-btn" onClick={() => delTask(index)}>Delete</button>
                </li>
            ))}
        </ol>
        </div>
    )
}
export default TodoList