import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { createStyles, Grid, NumberInput, Switch } from "@mantine/core";
import { IconSettings } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
    h1: {
        backgroundColor: theme.colors.gray[8],
        color: theme.colors.gray[0],
        width: '80%',
        margin: 'auto',
    }
}));




const SettingsForm = () => {

    const { classes } = useStyles();
    
    const { 
        showCount,
        sortKey,
        showCompleted,
        setShowCount,
        setSortKey,
        setShowCompleted,

    } = useContext(SettingsContext);
    
    
    return (
        <>
        <h1 className={classes.h1}><IconSettings />Manage Settings</h1>

        <Grid style={{width: '80%', margin: 'auto'}}>
            <Grid.Col xs={12} sm={6}>
            <form>
                <h3>Update Settings</h3>
                <Switch 
                    label="Show completed"
                    checked={showCompleted}
                    onChange={((e) => setShowCompleted(e.currentTarget.checked))}
                />
                <NumberInput
                    defaultValue={showCount} 
                    label="Items Per Page"
                />
            </form>
            </Grid.Col>
            <Grid.Col xs={12} sm={6}>

            </Grid.Col>

        </Grid>
        </>
    );
}

export default SettingsForm;