import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('rennders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem', {}, {timeout: 3000});
        expect(listItemElements).not.toHaveLength(0);
    });
});