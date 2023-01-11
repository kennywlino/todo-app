import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
    const [showCount, setShowCount] = useState(3);
    const [sortKey, setSortKey] = useState('difficulty');
    const [showCompleted, setShowCompleted] = useState(false);

    const saveToLocalStorage = () => {
        localStorage.setItem('todo', JSON.stringify({showCount, sortKey, showCompleted}));
    }

    useEffect(() => { 
         let storage = JSON.parse(localStorage.getItem('todo'));
         if(storage){
            console.log('storage', storage);
            setShowCompleted(storage.showCompleted)
            setShowCount(storage.showCount)
            setSortKey(storage.sortKey);
         }
    }, []);

    const values = {
        showCount,
        sortKey,
        showCompleted,
        setShowCount,
        setSortKey,
        setShowCompleted,
        saveToLocalStorage
    };

    return (
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )
};

export default SettingsProvider;