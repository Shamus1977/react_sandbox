import React, {useRef} from 'react';

const UseRefExample1 = () => {
    //Returns an object with one property called current.
    //Inside current is the DOM element. It is the acyual DOM element.
    //You can get the value with current.value
    const inputRef = useRef();
    //can be on any element
    const paraRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
        //You an also set the value
        inputRef.current.value = "Default";
        //You can change styling
        inputRef.current.style.backgroundColor = "red";
        //Change paragragh text
        paraRef.current.innerText = "Goodbye";
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <label htmlFor='name' >Name</label>
                <input 
                    type="text" 
                    id="name" 
                    ref={inputRef}
                    className='form-control mb-2' 
                />
                <button type="submit" className='btn btn-primary' >
                    Submit
                </button>
            </form>
            {/*Focus on input when paragragh is clicked */}
            <p ref={paraRef} onClick={() => inputRef.current.focus()} >Hello From Para</p>
        </div>
    )
}

export default UseRefExample1
