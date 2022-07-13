import logo from './logo.svg';
import './App.css';
import { Ship } from './Ship.js'
import React, {useState} from 'react'
import { InvadersArmy } from './InvadersArmy.js'


function App() {
  const [gameOver, setGameOver] = useState(false);


  const endGame = () => {
    console.log('GameOver')
    setGameOver(true);
  }

  return (
    <div className="App">
      <header className='App-header'>

      </header>
      <InvadersArmy endFunc={endGame} />
      <Ship />
      {gameOver && <div style={{
        position: 'absolute', left: '50%', top: '50%',
        color: 'red', fontSize: 80
      }}>Game Over!</div>}

    </div>
  );
}

export default App;
