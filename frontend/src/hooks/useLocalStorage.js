import { useEffect, useRef, useState } from "react";

const useLocalStorage = (initialValue = {}) => {
    const itemsRef = useRef({});
    const [ localStorageItems, setLocalStorageItems ] = useState(itemsRef);

    const getItemValue = (key) => {
        const value = window.localStorage.getItem(key);

        if (value) {
            return JSON.parse(value);
        }

        return null;
    };

    const setItem = (key, value) => {
        localStorage.setItem([key], JSON.stringify(value));
        itemsRef.current[key] = value;
        setLocalStorageItems({ ...itemsRef.current });
    };

    const removeItem = (key) => {
        localStorage.removeItem(key);
        delete itemsRef.current[key];
        setLocalStorageItems({ ...itemsRef.current });
    };

    const clearItems = () => {
        localStorage.clear();
        itemsRef.current = {};
        setLocalStorageItems({ ...itemsRef.current });
    };

    const synchronize = (initialValue) => {
        for (const property in initialValue) {
            const itemValue = getItemValue(property);

            if (itemValue) {
                setItem(property, itemValue);
            } else {
                setItem(property, initialValue[property]);
            }
        }
    };

    useEffect(() => {
        synchronize(initialValue);
    }, []);

    return {
        items: localStorageItems,
        setItem,
        removeItem,
        clearItems,
    };
};

export default useLocalStorage;