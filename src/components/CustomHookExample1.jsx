import React from 'react';
import UseFetch from './custom_hooks/UseFetch';

const CustomHookExample1 = () => {
    const {data, isLoading} = UseFetch("https://jsonplaceholder.typicode.com/posts",{});

    if(isLoading){
        return <h2>Loading...</h2>
    }
    console.log(data);
    return (
        <div>
            {data.map(post => <p key={post.id} >{post.title}</p>)}
        </div>
    );
}

export default CustomHookExample1;
