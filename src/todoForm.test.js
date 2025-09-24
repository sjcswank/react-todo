import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './todoForm';

it('adds input to state', async () => {
    const mockAddTodo = jest.fn();

    render(<TodoForm addTodo={mockAddTodo} />);
    const input = screen.getByRole('textbox', { name: /new todo/i });
    const button =screen.getByRole('button', { name: /add todo/i });

    await userEvent.type(input, 'Write a test');
    await userEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith({content: 'Write a test'});
    expect(input).toHaveValue('');
    
});

