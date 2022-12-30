import React, {useState} from 'react';
import ToDo from './ToDo';

const UseRefExample3 = () => {
    const [showToDo, setShowToDo] = useState(true);
    return (
        <div>
            {showToDo && (
                <div><ToDo /></div>
            )}
            <button onClick={() => setShowToDo(!showToDo)} className='btn btn-primary' >Toggle ToDo</button>
        </div>
    )
}

export default UseRefExample3
