import React from 'react';
import useLocalStorage from './custom_hooks/useLocalStorage';

const CustomHookExample2 = () => {
    const [task, setTask] = useLocalStorage("task", "");
    return (
        <div>
            <form className='w-25' >
                <div>
                    <label className='form-label' >Tasks</label>
                    <input 
                        className='form-control'
                        type="text" 
                        value={task} 
                        onChange={(e) => setTask(e.target.value)} 
                    />
                </div>
            </form>
        </div>
    );
}

export default CustomHookExample2;
