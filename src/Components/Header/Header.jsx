import { createStyles, Group } from '@mantine/core';
import { Link } from "react-router-dom";
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

    return (
        <header className={classes.header}>
            <Group position="apart">
                <Group>
                    <Link className={classes.link} to="/">Home</Link>
                    <Link className={classes.link} to="/settings">Settings</Link>
                </Group>
                    <Login />
            </Group>
        </header>
    )
}

export default Header;