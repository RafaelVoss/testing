import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World!" as a text', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // ... nothing
    
        // Assert  
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "It\'s good to see you!" if BUTTON was NOT clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // do something that changes the text
        
    
        // Assert  
        const greetingElement = screen.getByText('It\'s good to see you!');
        expect(greetingElement).toBeInTheDocument();
    });

    test('renders "Changed!" if BUTTON was clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

    
        // Assert  
        const changedElement = screen.getByText('Changed!');
        expect(changedElement).toBeInTheDocument();
    });

    test('Doesn\'t render "It\'s good to see you!" if BUTTON was clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

    
        // Assert  
        const changedElement = screen.queryByText('It\'s good to see you!');
        expect(changedElement).toBeNull();
    });
});
