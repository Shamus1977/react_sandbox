import React, {useState, useEffect, useRef} from 'react';
/////////////////////////////////////////////////////// This Will NOT TO WORK in STRICT MODE
// In strict mode useEffect is ran twice, to test for side effects. Therefore, the component
// will automatically unmount and isMounted will be set is false, which will prevent the data
// From loading.
const ToDo = () => {
    const [loading, setLoading] = useState(true);
    const [toDo, setToDo] = useState({});

    //created ref to tell when mounted.
    const isMounted = useRef(true);

    useEffect(() => {
        //Make call to demo API.
        //If this component is toggles off before the request is
        // complete, it will cause a memory leak under some circumstances.
        //To prevent this memory leak useRef is used.
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    //To prevent leak make sure isMounted is true, before setting state.
                    if(isMounted.current){
                        console.log("in if");
                        setToDo(data);
                        setLoading(false);
                    }
                },3000)
            });
            ///When the component is toggled off and unmounted the below will run.
            return function () {
                isMounted.current = false;
            }
    },[isMounted])
    console.log("isMounted: "+isMounted.current);
    return (
        <div>
            {loading? <h3>Loading...</h3>:<h3>{toDo.title}</h3>}
        </div>
    )
}

export default ToDo
