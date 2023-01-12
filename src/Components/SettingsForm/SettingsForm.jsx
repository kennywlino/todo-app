import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { Button, Card, createStyles, Grid, NumberInput, Switch, TextInput } from "@mantine/core";
import { IconSettings } from '@tabler/icons'
import { When } from 'react-if';

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

    const [showUpdatedSettings, setShowUpdatedSettings]  = useState(false);
    
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
        setShowUpdatedSettings(true);
        saveToLocalStorage();
    }
    
    return (
        <>
        <h1 className={classes.h1}><IconSettings />Manage Settings</h1>

        <Grid style={{width: '80%', margin: 'auto'}}>
            <Grid.Col xs={12} sm={6}>
            <Card withBorder p="sm">
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
            </Card>
            </Grid.Col>
            <Grid.Col xs={12} sm={6}>
                <When condition={showUpdatedSettings}>
                    <Card withBorder p="sm">
                        <h3>Updated Settings</h3>
                        {showCompleted ? 
                            <p>Show Completed ToDos</p> :
                            <p>Hide Completed ToDos</p>
                        }
                        <p>Items Per Page: {showCount}</p>
                        <p>Sort Keyword: {sortKey}</p>
                    </Card>
                </When>
            </Grid.Col>
        </Grid>
        </>
    );
}

export default SettingsForm;