import { Button, TextInput, createStyles, Group } from '@mantine/core';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/Auth';
import Login from '../Login/Login';

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.colors.blue[7],
        padding: theme.spacing.md,
    },
    link: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.gray[0],
        textDecoration: 'none'
    },
    textInput: {
        label: {
            color: theme.colors.gray[0],
        }
    }
}));

const Header = () => {
    const { classes } = useStyles();

    const { login, logout, user } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    }

    return (
        <header className={classes.header}>
            <Group position="apart">
                <Group>
                    <Link className={classes.link} to="/">Home</Link>
                    <Link className={classes.link} to="/settings">Settings</Link>
                </Group>
                <Group>
                    <Login />
                </Group>
            </Group>
        </header>
    )
}

export default Header;