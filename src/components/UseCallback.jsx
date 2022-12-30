//useCallback, is like useMemo, except it memoizes a callback function 
// instead of a return value. It returns a function when the dependencies
// change.
// This is only an example to show how it works. In reality it should only
// be used on complex omponents which take a while to render.

import React, {useState, useCallback} from 'react';

const UseCallback = () => {
    const [tasks, setTasks] = useState([]);

    //Here we use useCallback. Now when the button is clicked,
    // It still adds a task but the whole button is not re-rendered.
    const addTask = useCallback( () => {
        setTasks((prevState) => {
            return [...prevState, "some Task"]
        });
    }, [setTasks]);

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task,index) => {
                return <p key={index} >{task}</p>
            })}
        </div>
    )
}

//React.memo memoizes an entire component, as long as the props 
//don't change. This also allows us to use useCallback, so the whole
//button does not need to be re-rendered, to get props, when it is pressed.
const Button = React.memo(({addTask}) => {
    console.log("Button rendered");
    return(
        <div>
            <button onClick={addTask} className="btn btn-primary" >Add Task</button>
        </div>
    )
});

export default UseCallback
