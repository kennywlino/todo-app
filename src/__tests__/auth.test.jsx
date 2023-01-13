import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import Auth from '../Components/Auth';
import Login from '../Components/Login/Login'
import AuthProvider, { AuthContext } from '../Context/Auth';

describe('Auth integration', () => {
    test('contain initial user and isLoggedIn values', () => {
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        ({isLoggedIn, user}) => (
                            <>
                                <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
                                <p data-testid="user">{typeof(user)}</p>
                                <p data-testid="userKeys">{Object.keys(user).length}</p>
                            </>
                        )
                    }
                </AuthContext.Consumer>
            </AuthProvider>
        );
        
        const isLoggedinP = screen.getByTestId('isLoggedIn');
        const userObjectP = screen.getByTestId('user');



    })
})