import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Composant App', () => {
  test('input accepte une saisie utilisateur', () => {
    render(<App />);
    const input = screen.getByTestId('name-input');

    fireEvent.change(input, { target: { value: 'Bob' } });

    expect(input.value).toBe('Bob');
  });

  test('le bouton affiche "Hello <nom>" dans le terminal', () => {
    console.log = jest.fn(); // mock console.log

    render(<App />);
    const input = screen.getByTestId('name-input');
    const button = screen.getByTestId('hello-button');

    fireEvent.change(input, { target: { value: 'Alice' } });
    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith('Hello Alice');
  });
});
