import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleClick = () => {
    console.log(`Hello ${name || 'World'}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>Hello {name || 'World'}</h1>

          <input
            type="text"
            placeholder="Entrer ton nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
            style={{ marginBottom: '1rem', padding: '0.5rem' }}
          />

          <br />

          <button onClick={handleClick} data-testid="hello-button">
            Click me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
