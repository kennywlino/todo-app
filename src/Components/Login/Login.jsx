import { Button, TextInput } from '@mantine/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';
import './Login.scss'

const Login = () => {

    const { login, logout, isLoggedIn } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    }

    return (
            <>
            <When condition={isLoggedIn}>
                <Button onClick={logout} color="red">Log Out</Button>
            </When> 

           <When condition={!isLoggedIn}>    
                <form onSubmit={handleLogin} className='login'>
                    <TextInput 
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <TextInput 
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Button type="submit" color="dark">Login</Button>
                </form>
            </When>
            </>
    )
}

export default Login;