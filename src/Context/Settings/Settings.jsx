import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
    const [showCount, setShowCount] = useState(3);
    const [sortKey, setSortKey] = useState('difficulty');
    const [showCompleted, setShowCompleted] = useState(false);

    const values = {
        showCount,
        sortKey,
        showCompleted,
        setShowCount,
        setSortKey,
        setShowCompleted,
    };

    return (
        <SettingsContext.Provider value={values}>
            {children}
        </SettingsContext.Provider>
    )
};

export default SettingsProvider;