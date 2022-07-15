import './App.css';
import { Ship } from './Ship.js'
import React, { useState } from 'react'
import { InvadersArmy } from './InvadersArmy.js'
import { RegularButton } from 'fronton-react';

function App() {

  const [gameOver, setGameOver] = useState(false);

  const handleReset = () => {
    setGameOver(false);
    window.location.reload(true);
  }

  const endGame = () => {
    console.log('GameOver');
    setGameOver(true);
  }

  return (
    <div className="App">
      <header className='App-header'>
      </header>
      <InvadersArmy endFunc={endGame} />
      <Ship />
      {
        gameOver &&
        <div>
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'red', fontSize: '6vh'
          }}>Game Over!</div>
          <RegularButton style={{
            position: 'absolute', fontSize: '4vh',
            alignSelf: 'center', display: 'flex', justifyContent: 'center',
            transform: 'translate(-50%,-50%)',
            left: '50%', bottom: '30%'
          }}
            onClick={handleReset}>Начать сначала!</RegularButton>
        </div>
      }
    </div>
  );
}

export default App;
