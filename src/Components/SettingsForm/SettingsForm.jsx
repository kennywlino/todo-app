import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { Button, createStyles, Grid, NumberInput, Switch, TextInput } from "@mantine/core";
import { IconSettings } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
    h1: {
        backgroundColor: theme.colors.gray[8],
        color: theme.colors.gray[0],
        width: '80%',
        margin: 'auto',
        fontSize: theme.fontSizes.lg,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
        marginTop: theme.spacing.md,
    }
}));




const SettingsForm = () => {
    
    const { 
        showCount,
        sortKey,
        showCompleted,
        setShowCount,
        setSortKey,
        setShowCompleted,
        saveToLocalStorage
        
    } = useContext(SettingsContext);
    
    const { classes } = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //setShowUpdatedSettings(true);
        saveToLocalStorage();
    }
    
    return (
        <>
        <h1 className={classes.h1}><IconSettings />Manage Settings</h1>

        <Grid style={{width: '80%', margin: 'auto'}}>
            <Grid.Col xs={12} sm={6}>
            <form onSubmit={handleSubmit}>
                <h3>Update Settings</h3>
                <Switch 
                    label="Show completed ToDos"
                    checked={showCompleted}
                    onChange={((e) => setShowCompleted(e.currentTarget.checked))}
                />
                <NumberInput
                    value={showCount} 
                    label="Items Per Page"
                    onChange={((val) => setShowCount(val))}
                />
                <TextInput
                    placeholder={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    label="Sort key"
                />
                <Button type="submit">Show New Settings</Button>
            </form>
            </Grid.Col>
            <Grid.Col xs={12} sm={6}>

            </Grid.Col>

        </Grid>
        </>
    );
}

export default SettingsForm;