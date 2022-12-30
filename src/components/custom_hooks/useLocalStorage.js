//This hook will send data to the local storage AND to state.
import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [localStorageValue, setLocalStorageValue] = 
        useState(() => getLocalStorageValue(key, initialValue));
    
    const setValue = value => {
        //Check if value is a function.
        const valueToStore = 
            value instanceof Function? value(localStorageValue) : value;
        // Set to state
        setLocalStorageValue(value);
        //Set to Local Storage.
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue){
    const itemFromStorage = localStorage.getItem(key);
    //JSON.parse parses it back to json.
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
