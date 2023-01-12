import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SettingsProvider, { SettingsContext }  from './Settings';

describe('Settings Context', () => {
    test('initial state loads as expected', () => {
        render(
            <SettingsProvider>
                <SettingsContext.Consumer>
                    {
                        ({showCompleted, showCount, sortKey}) => (
                            <ul>
                                <li data-testid="show-completed">{showCompleted.toString()}</li>
                                <li data-testid="show-count">{showCount}</li>
                                <li data-testid="sort-key">{sortKey}</li>
                            </ul>
                        )
                    }
                </SettingsContext.Consumer>
            </SettingsProvider>
        );

        let completedLi = screen.queryByTestId('show-completed');
        let pageItemLi = screen.queryByTestId('show-count');
        let sortLi = screen.queryByTestId('sort-key');

        expect(completedLi).toHaveTextContent('false');
        expect(pageItemLi).toHaveTextContent('3');
        expect(sortLi).toHaveTextContent('difficulty');
    })
})