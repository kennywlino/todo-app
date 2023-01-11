import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { NumberInput, Switch } from "@mantine/core";

const SettingsForm = () => {
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
        <h2>Manage Settings</h2>
        <form onSubmit={() => {}}>
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
        </>
    );
}

export default SettingsForm;