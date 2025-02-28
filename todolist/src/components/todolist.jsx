import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]); // Stores all tasks
    const [task, setTask] = useState("");  // Stores current input

    // Function to add a new task
    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]); // Add new task to the list
            setTask(""); // Clear input field
        }
    };

    // Function to delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Function to move a task up
    const moveUp = (index) => {
        if (index === 0) return; // First task cannot move up
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    };

    // Function to move a task down
    const moveDown = (index) => {
        if (index === tasks.length - 1) return; // Last task cannot move down
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    };

    return (
        <div style={styles.container}>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
                style={styles.input}
            />
            <button onClick={addTask} style={styles.addButton}>Add Task</button>
            <ul style={styles.list}>
                {tasks.map((t, index) => (
                    <li key={index} style={styles.listItem}>
                        {t}
                        <div>
                            <button onClick={() => moveUp(index)} style={styles.button}>⬆</button>
                            <button onClick={() => moveDown(index)} style={styles.button}>⬇</button>
                            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Basic CSS styles using JavaScript object
const styles = {
    container: { textAlign: "center", maxWidth: "400px", margin: "auto", padding: "20px", background: "#f4f4f4", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
    input: { padding: "10px", width: "70%", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" },
    addButton: { background: "#007bff", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" },
    list: { listStyle: "none", padding: "0" },
    listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", padding: "10px", margin: "5px 0", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" },
    button: { marginLeft: "5px", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", background: "#ddd" },
    deleteButton: { marginLeft: "5px", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", background: "#ff4d4d", color: "white" }
};

export default TodoList;
