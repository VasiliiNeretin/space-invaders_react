import './App.css';
import Draggable from 'react-draggable';
import React, {useState} from 'react'
import { Bullet } from './Bullet.js'


export function Ship() {
    const [bullets, setBullets]=useState([]);
    const handleStart = () => {
        setBullets(...bullets, <Bullet />);
        
        console.log('bam')
    }

    return (
        <div style={{position:"absolute", bottom:"10%"}}>
            <button onClick={handleStart}>Бэм</button>

            <Draggable axis="x" handle=".handle" 
                grid={[25, 25]}
                // onStart={handleStart}
                // onDrag={handleStart}
                scale={1}>
                <div style={{position:"absolute", bottom:"10%"}}>
                    {bullets}
                    <div className="handle" style={{ userSelect: 'none' }}>

                        <img src={require('./icons/Ship.png')} alt='Weee' style={{ pointerEvents: 'none', userSelect: 'none', width: 100, height: 100 }} />
                    </div>
                </div>
            </Draggable>
            </div>
    )
}