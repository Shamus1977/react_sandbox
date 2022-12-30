import React, {useState, useEffect, useRef} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const UseRefExample2 = () => {
    const [name, setName] = useState("");
    //Default value set to one
    const renders = useRef(1);
    const prevName= useRef("");

    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;
    }, [name])
    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h1>PrevName State: {prevName.current}</h1>
            <input 
                type="text" 
                className='form-control mb-3' 
                onChange={(e) => setName(e.target.value)}
                />
        </div>
    )
}

export default UseRefExample2
