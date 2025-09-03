import { useEffect, useState } from 'react';
// This custom hook provides a way to use localStorage in a React component
// It allows you to store and retrieve values from localStorage with type safety
// The hook takes a key and an initial value as parameters
// It returns the stored value and a function to update it
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
// The useState hook initializes the stored value from localStorage
// If the key does not exist, it uses the provided initial value
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Error writing localStorage key "${key}":`, error);
        }   
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}