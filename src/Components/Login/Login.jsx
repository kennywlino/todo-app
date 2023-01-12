import { Button, TextInput, createStyles, Group } from '@mantine/core';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';
import './Login.scss'

const useStyles = createStyles((theme) => ({
    textInput: {
        label: {
            color: theme.colors.gray[0],
        }
    }
}));

const Login = () => {
    const { classes } = useStyles();

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
                        className={classes.textInput}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <TextInput 
                        placeholder="password"
                        className={classes.textInput}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Button type="submit" color="dark">Login</Button>
                </form>
            </When>
            </>
    )
}

export default Login;