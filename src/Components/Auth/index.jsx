import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { When }

const Auth = ({capability, children}) => {
    const { isLoggedIn, can } = useContext(AuthContext);

    return (
        <When condition={isLoggedIn && can(capability)}>
            {children}
        </When>
    )
};

export default Auth;