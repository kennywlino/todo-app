import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const can = (capability) => {

    };

    const _validateToken = (token) => {
        try {
            let validUser = jwt_decode(token);
            console.log('validUser', validUser); 
        } catch(e) {
            setError(e);
            console.error(e);
        }
    }

    const login = (username, password) => {
        /* let authCredentials = testUsers[username];

        if(authCredentials && authCredentials.password == password) {
            try {
                _validateToken(authCredentials.token);
            } catch(e) {
                setError(e);
                console.error(e);
            }
        } */

    };

    const logout = () => {

    }

    const values = {
        user,
        isLoggedIn,
        error,
        can,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;