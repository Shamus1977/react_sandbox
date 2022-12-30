/// THIS FUNCTION SHOULD HAVE BEEN CAMEL CASE.
import React, {useState, useEffect} from 'react';

const UseFetch = (url, options) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();

                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return {data, isLoading, error};
}

export default UseFetch;
