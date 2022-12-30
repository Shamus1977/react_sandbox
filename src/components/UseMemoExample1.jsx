// Use memo should only be used if you are experiencing performance issues.
// It will slow down the initial render. So should only be used when needed.
// It applies memoization, which is an optimization technique that speeds up
//performance by storing or caching the results of an expensive function call.
// When the same inputs or arguments are present.
//Expensive can be defined as a call that takes a lot of resources and/or time to complete.
// Such as searching through 1000's of records in a database or video processing or 
// a computation that takes up a lot of time.

import React, {useState, useEffect, useRef, useMemo} from 'react';

const UseMemoExample1 = () => {
    const [number, setNumber] = useState(1);
    const [increment, setIncrement] = useState(0);

    const renders = useRef(1);

    //Dummy expensive function without useMemo
    //const sqrt = getSqrt(number);

    //Dummy expensive function WITH useMemo
    //Takes in a dependency array
    //Can use useMemo because the argument in the function is not being changed everytime.
    // If the number is changed it will call the expensive function. If not it will use the 
    // cached value.
    const sqrt = useMemo(() => getSqrt(number), [number]);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    const handleClick = () => {
        setIncrement((prevState) => {
            console.log(prevState + 1);
            return prevState + 1;
        });
    };

    return (
        <div>
            <input 
                onChange={(e) => setNumber(e.target.value)} 
                type="number" 
                value={number} 
                className='form-control w-25' 
            />

            <h2 className='my-3' >
                The sqrt of {number} is {sqrt}
            </h2>

            <button onClick={handleClick} className='btn btn-primary'>Re-Render</button>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

function getSqrt(n){
    for(let i = 0; i < 10000; i++){
        console.log(i);
    };
    console.log("Expensive Function Called!");
    return Math.sqrt(n);
}

export default UseMemoExample1
